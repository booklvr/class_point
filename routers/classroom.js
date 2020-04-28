const   express =           require('express'),
        url =               require('url'),
        multer =            require('multer'),
        upload =            require('./middleware/csv.multer'),
        User  =             require('../db/models/user'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        { isLoggedIn } =    require('./middleware/auth');

const router = new express.Router();


// GET USERS CLASSROOMS
router.get('/', isLoggedIn, async (req, res) => {
    console.log('get add classroom form')
    
    try {
        let user = await User.findById(req.user._id);

        // console.log('user pre', user);

        user = await user.populate({
            path: 'classrooms',
        }).execPopulate();

        classrooms = user.classrooms;
        // console.log("classrooms", classrooms)


        // console.log('user post populate', user);
        // console.log('user.classrooms', user.classrooms);
        res.render('pages/classrooms', { classrooms });
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }


    // res.render('pages/classrooms');
})

// GET ADD CLASSROOM FORM 
router.get('/add', (req, res) => {
    console.log('get addClassroom form');



    res.render('pages/addClassroom');
})

// ADD CLASSROOM
router.post('/add', isLoggedIn, upload, async (req, res) => {
    
    // console.log('get add classroom form');
    // console.log('name:', req.body.className);
    // console.log('user._id: ', req.user._id);

    if (!req.body.className){ 
        return res.status(400).send({error: 'could not add question'});
    }

    let classroom;

    try {
        classroom = new Classroom({
            owner: req.user._id,
            className: req.body.className
        })

        await classroom.save();
        // res.send(classroom);
    } catch (err) {
        console.log(err),
        res.status(500).send(err);
    }

    // IF NO FILE STREAM
    if(!req.file) {
        console.log('no file uploaded reverting to add manually');
        return res.render('pages/addStudents', {classroom})
    }

    
    //convert CSV BUFFER TO STRING
    const csv = req.file.buffer.toString()

    // split lines on carriage return, split each by comma
    let lines = csv.split('\n')
                    .map(line => line.trim().split(','));

    // get the keys from line 1;
    const keys = lines[0];
    
    for (i = 1; i < lines.length - 1; i++) {
        const student = {}
        keys.forEach((key, index) => {
            student[key] = lines[i][index];
        })
        // students.push(student);
        newStudent = new Student({
            ...student,
            classroom: classroom._id,
        })
        await newStudent.save();
    }

    res.redirect(`./update/${classroom._id}`)
    
}, (error, req, res, next) => {
    
    res.status(400).send({error: error.message});
})

router.get('/update/:id', isLoggedIn, async (req, res) => {
    console.log('update route');
    // console.log('req.query:', req.query);

   
    try {
        const classroom = await Classroom.findById(req.params.id);

        if (!classroom) {
            return res.status(404).send('classroom not found');
        }

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        // console.log(classroom.students);

        res.render('pages/editClassroom', {
            students: classroom.students,
            className: classroom.className
        });

    } catch (err) {
        console.log('err');
        res.status(404).send(err);
    }
})

router.post('/update', isLoggedIn, async (req, res) => {
    // Need to get the classroom? 
    
    try {
        const newStudent = await new Student({
            ...req.body,
        })
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.get('/delete/:id', isLoggedIn, async (req, res) => {
    console.log('classroom id:', req.params.id)
    try {
        const deleteClass = await Classroom.findOne({_id: req.params.id});
        await deleteClass.deleteOne();

        if (deleteClass) {
            // req.flash('success', 'Classroom deleted Successfully');
            console.log('deleted classroom successfully');
            res.redirect('../');
        }
        else{res.status(404).send('classroom not found')};
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

module.exports = router;
