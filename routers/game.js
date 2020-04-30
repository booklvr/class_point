const   express =           require('express'),
        User  =             require('../db/models/user'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        { isLoggedIn } =    require('./middleware/auth');


const router = new express.Router();

// get the individual game
// * id = classroom._id
router.get('/individual/:id', isLoggedIn, async (req, res) => {
    res.send('made it to the individual game')
})

// get the boysVsGirls game
// * id = classroom._id
router.get('/boysVsGirls/:id', isLoggedIn, async (req, res) => {
    res.send('made it to the boys vs girls game')
})

// get the team game
// * id = classroom._id
router.get('/team/:id', isLoggedIn, async (req, res) => {
    res.send('made it to the individual game')
})


module.exports = router;
