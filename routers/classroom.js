const   express =       require('express'),
        multer =            require('multer'),
        User  =             require('../db/models/user'),
        upload =            require('./middleware/csv.multer'),
        Classroom =         require('../db/models/classroom'),
        { isLoggedIn } =    require('./middleware/auth');

const router = new express.Router();

router.post('/svg', isLoggedIn, upload.single('csvFile'), async (req, res) => {
   
  //  -> req.file.buffer is from multer and contains binary info form the image uploaded
    console.log(req.file)

    // const buffer = 

        // req.user.avatar = buffer;
        // await req.user.save();  // save file to user profile

        // const questions = await Question.findOne({owner: req.user._id});
        // if (questions) {
        //     res.redirect('/users/me')
        // } else {
        //     res.redirect('../../questions/');
        // }
        
    }, (error, req, res, next) => { // all four arguments needed so express knows to expect an error
    res.status(400).send({error: error.message }); // error from upload.single multer middleware
})

router.get('/', isLoggedIn, (req, res) => {
    console.log('get add classroom form')
    res.render('pages/classrooms');
})

module.exports = router;
