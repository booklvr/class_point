const   express =       require('express'),
        User  =       require('../db/models/user'),
        Classroom =      require('../db/models/classroom'),
        { isLoggedIn } = require('./middleware/auth');

const router = new express.Router();

// GET USER's CLASSROOM
router.get('/me', isLoggedIn, async(req, res) => {
    console.log('get logged in User classroom');

    res.send('test');
})

// REGISTER NEW User
router.post('/', async (req, res, next) => {
    console.log('registering new user');

    
    const newUser = {
        ...req.body
    }

    console.log(newUser);

    const user = new User(newUser);
    
    try {
        User.register(user, req.body.password, (err, user) => {
            if (err) {
                console.log('error while registering user: ', err)
                return res.send(err);
            } 
            passport.authenticate("local")(req, res, function(){
                // req.flash("success", "successfully signed up! nice to meet you " + req.body.username);
                res.send(user);
            });
        });
    } catch (err) {
        console.log("err", err);
        res.status(500).send({error: 'server error'});
        
    }
    

    // res.send('test');
})

//LOGIN USER FORM
router.get('/login', async(req, res) => {
    console.log('get login form');

    res.send('test');
})

//LOGIN USER
router.post('/login', isLoggedIn, async(req, res) => {
    console.log('logging in user');

    res.send('test');
})

//LOGOUT USER
router.get('/', async(req, res) => {
    console.log('');

    res.send('test');
})

//UPDATE USER FORM
router.get('/update', async(req, res) => {
    console.log('get update form');

    res.send('test');
})

//UPDATE USER
router.post('/update', isLoggedIn, async(req, res) => {
    console.log('updating user');

    res.send('test');
})

// CONFIRM DELETE FORM
//* maybe use confirm javascript
router.get('/confirmDelete', isLoggedIn, async(req, res) => {
    console.log('get confirm delete form');

    res.send('test');
})

// CONFIRM DELETE
router.post('/confirmDelete', isLoggedIn, async(req, res) => {
    console.log('confirming user delete');

    res.send('test');
})

// DELETE USER FORM
router.get('/delete', isLoggedIn, async(req, res) => {
    console.log('get delete form');

    res.send('test');
})

// DELETE USER
router.get('/delete', isLoggedIn, async(req, res) => {
    console.log('delete user');

    res.send('test');
})

 

module.exports = router;
