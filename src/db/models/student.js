const   mongoose =  require('mongoose');
        
// Create Student Schema
// * mongoose renames the schmea and adds an 's' in the database

const studentSchema = new mongoose.Schema({
    classroom: {
        type: mongoose.Schema.Types.ObjectId, // from user Schema logged in user
        required: true,
        ref: 'Classroom' // connect to user model
    },
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        default: 0
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    participationPoints: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;