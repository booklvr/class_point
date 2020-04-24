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

classroomSchema.pre('deleteOne', {document: true, query: false}, async function(req, res, next) {
    console.log('initiating cascade delete students from classroom');
    const classroom = this;
    console.log("find students in classroom:", classroom)

    
    // console.log("question", question)
    // const questionID = await question.getFilter()["_id"];
    // console.log("questionId", questionID)

    try {
        if (typeof classroom === 'undefined') {
            console.log("Can't find classroom in classroom.pre('deleteOne') middleware.  Throw Error");
            throw new Error("Can't find clsassroom in classroomSchema.pre('deleteOne') middleware");
        }

        const deletedStudents = await Student.deleteMany({classroom: classroom._id})

        
        console.log('deletedStudents', deletedStudents);
        console.log('deleted Students successfully');

        // throw new Error('from questionSchema.pre(delete One) throw error');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

    next();
});

const Classroom = mongoose.model('Classroom', classroomSchema);

module.exports = Classroom;