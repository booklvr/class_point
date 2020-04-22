const   mongoose =  require('mongoose'),
        Student =   require('./student');
        
// Create Classroom Schema
// * mongoose renames the schmea and adds an 's' in the database

const classroomSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, // from user Schema logged in user
        // required: true,
        ref: 'User' // connect to user model
    },
    className: {
        type: String,
        required: true,
    },
    // students: {
    //     type: Array,
    //     "default": []
    // }
}, {
    timestamps: true
});

classroomSchema.virtual('students', {
    ref: 'Student', // reference Classroom Model,
    localField: '_id', // local property that is same as foreign field (user _id);
    foreignField: 'classroom' // name of thing on Classrooom model that creates relationship (user ._id);
})


const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;