const   express =           require('express'),
        User  =             require('../db/models/user'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        gameHelper =        require('./helpers/gameHelper'),
        { isLoggedIn } =    require('./middleware/auth');


const router = new express.Router();

// get the individual game
// * id = classroom._id
router.get('/individual/:id', async (req, res) => {
    console.log('made it to the individual game')

    // console.log(req.params.id);

    res.render('pages/individual', {classroomID: req.params.id})
});

router.get('/individual/data/:id', async (req, res) => {
    console.log('fetch data for individual game');

    try {
        const classroom = await Classroom.findById(req.params.id);

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        students = classroom.students;
        // console.log('students:', students);

        studentsShuffled = gameHelper.shuffleArray(students);
        
        // console.log('shuffledStudents:', studentsShuffled);
        // res.send(students);
        res.send(studentsShuffled);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

// get the boysVsGirls game
// * id = classroom._id
router.get('/boysVsGirls/:id', async (req, res) => {
    console.log('made it to the boys vs girls game');

    res.render('pages/boysVsGirls', {classroomID: req.params.id});
})

router.get('/boysVsGirls/data/:id', async (req, res) => {
    console.log('get the boys Vs girls data');

    try {
        const classroom = await Classroom.findById(req.params.id);

        await classroom.populate({
            path: 'students'
        }).execPopulate();

        const students = classroom.students;
        // console.log(students);

        // ****** FOR DEVELOPEMNT DONT" SHUFFLE

        const shuffledStudents = gameHelper.shuffleArray(students);

        //shuffle the array for different game play
        const boys = shuffledStudents.filter(student => student.sex === 'male');

        // *** for developemnt
        // boys = students.filter(student => student.sex === 'male');
        // girls = students.filter(student => student.sex === 'female');

        // console.log('boys', boys);

        const girls = shuffledStudents.filter(student => student.sex === 'female');
        // console.log('girls', girls);

        res.send({girls, boys});
        
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})


// let teams;
// get the team game
// * id = classroom._id
// router.post('/team', (req, res) => {
//     console.log('YOU HAVE MAD IT TO THE TEAM DATA POST ROUTE')

//     console.log('req.body', req.body);

//     teams = req.body;

//     res.send(teams);

//     console.log('ahhhhhhhhhhhhhhh')
// })

// router.get('/teams/:id', (req, res) => {
//     res.render('pages/team', {classroomID: req.params.id})
// });

// router.get('/teams/data/:id', (req, res) => {
//     console.log(teams);
//     res.send({teams});
// })

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

        res.render('pages/team', {classroom, students: students})
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
