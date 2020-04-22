const   express =       require('express'),
        multer =            require('multer'),
        User  =             require('../db/models/user'),
        upload =            require('./middleware/csv.multer'),
        Classroom =         require('../db/models/classroom'),
        { isLoggedIn } =    require('./middleware/auth');

const router = new express.Router();


// GET USERS CLASSROOMS
router.get('/', isLoggedIn, (req, res) => {
    console.log('get add classroom form')
    res.render('pages/classrooms');
})

// GET ADD CLASSROOM FORM 
router.get('/addClassroom', (req, res) => {
    console.log('get addClassroom form');



    res.render('pages/addClassroom');
})

// ADD CLASSROOM
router.post('/addClassroom', upload, async (req, res) => {
    console.log('get add classroom form');

    console.log(req.file.originalname);
    const csv = req.file.buffer.toString()
    // console.log("csv", csv)
    

    let lines = csv.split('\n')
                    .map(line => line.trim().split(','));
    // lines = lines.map(line => line.trim());
    console.log("lines", lines)

    const keys = lines[0];
    console.log("keys", keys);

    const students = [];

    for (i = 1; i < lines.length - 1; i++) {
       const student = {}
        keys.forEach((key, index) => {
            student[key] = lines[index];
        })
        students.push(student);

    }
    console.log(students);
    


    
    

    // headers = lines[0].split(',');
    // console.log("headers", headers)

    
    
    
    
    res.render('pages/addClassroom');
}, (error, req, res, next) => {
    
    res.status(400).send({error: error.message});
})



module.exports = router;
