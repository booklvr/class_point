const   mongoose =  require('mongoose');
        
// Create Classroom Schema
// * mongoose renames the schmea and adds an 's' in the database

const classroomSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // from user Schema logged in user
        required: true,
        ref: 'User' // connect to user model
    },
    // name: {
    //     type: String,
    //     required: true,
    // },
    students: {
        type: Array,
        "default": []
    }
})

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;