const   express =       require('express'),
        User  =       require('../db/models/user'),
        Classroom =      require('../db/models/classroom'),
        { isLoggedIn } = require('./middleware/auth');

const router = new express.Router();

router.get('/', (req, res) => {
    res.render('pages/landing');
})


module.exports = router;
