const   express =       require('express'),
        multer =            require('multer'),
        csv =               require('csvtojson'),
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
router.get('/addClassroom', isLoggedIn, (req, res) => {
    console.log('get addClassroom form');



    res.render('pages/addClassroom');
})

// ADD CLASSROOM
router.post('/addClassroom', isLoggedIn, upload, async (req, res) => {
    console.log('get add classroom form');

    console.log(req.file.originalname);
    const csv = req.file.buffer.toString()

    const lines = csv.split('\n')
    
    
    console.log(lines);
    
    res.render('pages/addClassroom');
}, (error, req, res, next) => {
    
    res.status(400).send({error: error.message});
})



module.exports = router;
