const   express =           require('express'),
        url =               require('url'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        { isLoggedIn } =    require('./middleware/auth');

        const router = new express.Router();

router.post('/', isLoggedIn, async (req, res) => {
    // get classroom, name, sex;
    
    const newStudent = {
        ...req.body,
    }
})
        
module.exports = router;