const   mongoose =                  require('mongoose'),
        { passportLocalSchema} =    require('mongoose');
        passportLocalMongoose =     require('passport-local-mongoose'),
        validator =                 require('validator'),
        Classroom =                 require('./classroom');

// Create User Schema
// * name 
// * email
// * password
// * timestamp ( as second object provied to user Schema)

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validator(value) {
            if(!validator.isEmail(value)) { // validator is an npm package
                throw new Error('Must provide an email');
            }
        }
    }
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose, { usernameField : 'email'});

userSchema.methods.toJSON = function () {
    const user = this;

    const userObject = user.toObject(); // toObject = mongoose method
    delete userObject.password;

    return userObject;
}

userSchema.virtual('classrooms', {
    ref: 'Classroom', // reference Classroom Model,
    localField: '_id', // local property that is same as foreign field (user _id);
    foreignField: 'owner' // name of thing on Classrooom model that creates relationship (user ._id);
})

// userSchema.virtual('classrooms', {
//     ref: 'Classroom', // refrence Question Model,
//     localField: '_id', // local property that is same as foreign field (user _id);
//     foreignField: 'owner' // name of thing on Answer model that creates relationship (user_id);
// });

// userSchema.pre('deleteOne', {document: true, query: false}, async function(next) {   
//     const user = this;
//     console.log("user", user)
//     console.log('find users classroom');
    
//     // const userId = user.getFilter()["_id"];

//     if (typeof user === "undefined") {
//         console.log("Error deleting user's classroom.  Can't find user.");
//     }

//     console.log('Removing all answers made by the user...')
//     try {
//         const deletedClassroom = await Classroom.deleteMany({owner: user._id})
//         console.log(deletedClassroom);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }

//     next();
// });

const User = mongoose.model('user', userSchema);

module.exports = User;

// ,
    // password: {
    //     type: String,
    //     required: false,
    //     trim: true,
    //     minlength: 1,
    // }