const   User =      require('../../db/models/user'),
        Classroom =    require('../../db/models/classroom');

const middlewareObj = {};

middlewareObj.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    console.log('you need to be logged in to do that')
    // req.flash("error", "You need to be logged in to do that");
    res.render('pages/login');
}

module.exports = middlewareObj;
