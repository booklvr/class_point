const   express =       require('express'),
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

        console.log('user pre', user);

        user = await user.populate({
            path: 'classrooms',
        }).execPopulate();

        classrooms = user.classrooms;
        console.log("classrooms", classrooms)


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
router.get('/add', isLoggedIn, (req, res) => {
    console.log('get addClassroom form');



    res.render('pages/addClassroom');
})

// ADD CLASSROOM
router.post('/add', isLoggedIn, upload, async (req, res) => {
    
    console.log('get add classroom form');
    console.log('name:', req.body.className);
    console.log('user._id: ', req.user._id);

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

    

    console.log('classroom._id:', classroom._id);

    

    // console.log('from', req.file.originalname);
    const csv = req.file.buffer.toString()
    console.log("csv", csv)

    
    

    let lines = csv.split('\n')
                    .map(line => line.trim().split(','));
    console.log("lines", lines)

    const keys = lines[0];
    // console.log("keys", keys);

    
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

    
    try {
        await classroom.populate({
            path: 'students',
        }).execPopulate();

        console.log(classroom);
        res.render('pages/editClassroom', { classroom });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    
    // res.render('pages/editClassroom', );
}, (error, req, res, next) => {
    
    res.status(400).send({error: error.message});
})

router.get('/edit', async (req, res) => {
    try {
        const classroom = await Classroom.findOne({className: 'nick'})

        if (!classroom) {
            return res.status(404).send('classroom not found');
        }

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        console.log(classroom);

    } catch (err) {
        console.log('err');
        res.status(404).send(err);
    }
})



module.exports = router;
