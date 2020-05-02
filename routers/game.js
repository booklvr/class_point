const   express =           require('express'),
        User  =             require('../db/models/user'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        { isLoggedIn } =    require('./middleware/auth');


const router = new express.Router();

// get the individual game
// * id = classroom._id
router.get('/individual/:id', async (req, res) => {
    console.log('made it to the individual game')

    try {
        const classroom = await Classroom.findById(req.params.id);

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        students = classroom.students;

        res.render('pages/individual', {students})
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

// get the boysVsGirls game
// * id = classroom._id
router.get('/boysVsGirls/:id', async (req, res) => {
    console.log('made it to the boys vs girls game');

    try {
        const classroom = await Classroom.findById(req.params.id);

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        const students = classroom.students;
        console.log(students);

        const boys = students.filter(student => student.sex === 'male');
        console.log('boys', boys);

        const girls = students.filter(student => student.sex === 'female');
        console.log('girls', girls);

        // const girls = students.filter(student = student.sex === 'female');
        // console.log('girls', girls);


        res.render('pages/boysVsGirls', {girls, boys});
        
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})

// get the team game
// * id = classroom._id
router.post('/team', (req, res) => {
    res.send('made it to the individual game')
    console.log('res.body', req.body)
})

// GET THE GAME FORM
router.get('/teamForm/:id', async (req, res) => {
    console.log('rendering game form');

    try {
        const classroom = await Classroom.findById(req.params.id);
        // console.log(classroom)

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        students = classroom.students;
        // console.log(students);

        res.render('pages/gameForm', {classroom, students: students})
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})

router.get("/classData/:id", async( req, res) => {
    
    const data = [];

    try {
        const classroom = await Classroom.findById(req.params.id);
        try {
            await classroom.populate({
                path: 'students' // populate questions
            }).execPopulate();
        } catch (err) {
            console.log(err);
        }

        res.send(classroom.students);

    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
        
})


module.exports = router;
