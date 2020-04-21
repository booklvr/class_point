const multer = require ('multer');


// MULTER MIDDLEWARE for POST /user/me/avatar
// MULTER middlware for POST /user/me/avatar
const upload = multer({
    
  // dest: 'avatars',  // provide file for uploaded images in route directory (remove to pass file through function)
    limits: {
        // fileSize: 1000000
    },
    fileFilter(req, file, cb) { // req, file-info, callback
        if(!file.originalname.match(/\.(csv)$/)) { // restrict file type to jpg jpeg or png -> originalname from multer docs
            console.log('trueorfalse', file.originalname.match(/\.(.csv)$/))
            return cb(new Error('File must be .csv'));
        }
        cb(undefined, true); // success
        // cb(undefined, false); // silently reject
    },
    // inMemory: true,
}).single('csvfile');

module.exports = upload;