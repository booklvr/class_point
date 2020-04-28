const   express =           require('express'),
        url =               require('url'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        { isLoggedIn } =    require('./middleware/auth');

const router = new express.Router();

router.post('/:id', isLoggedIn, async (req, res) => {
    console.log('fucckkkkk');
    if (!req.body.name) {
        console.log('must include class name');
    } else if (!req.body.gender) {
        console.log('must include gender');
    } 
    try {
        const newStudent =  new Student ({
            classroom: req.params.id,
            name: req.body.name,
            sex: req.body.sex,
        });
        await newStudent.save();
        res.redirect(`../classroom/class/${req.params.id}`)
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.get('/delete/:id', isLoggedIn, async (req, res) => {
    console.log('delete student route');

    try {
        const student = await Student.findOne({_id: req.params.id })
        console.log(student);

        const classroom = student.classroom;
        await student.deleteOne();
        res.redirect(`../../classroom/class/${classroom}`)
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})
        
module.exports = router;