const   express =           require('express'),
        url =               require('url'),
        Classroom =         require('../db/models/classroom'),
        Student =           require('../db/models/student'),
        { isLoggedIn } =    require('./middleware/auth');

const router = new express.Router();

router.post('/:id', isLoggedIn, async (req, res) => {
    
    if (!req.body.name) {
        console.log('must include class name');
    } else if (!req.body.gender) {
        console.log('must include gender');
    } 
    try {
        const newStudent =  new Student ({
            classroom: req.params.id,
            name: req.body.name,
            sex: req.body.sex,
        });
        await newStudent.save();
        res.redirect(`../classroom/class/${req.params.id}`)
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

router.post('/update/:id', async (req, res) => {
    const updates = Object.keys(req.body) // returns list of keys from req.body,

    const allowedUpdates = ['name', 'sex', 'totalPoints'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!' });
    }

    const query = {
        _id: req.params.id,
    }

    const update = {
        ...req.body,
    }

    delete update.totalPoints;

    try {
        const options = {
            new: true,
        }

        const student = await Student.findOneAndUpdate(query, update, options);
        // console.log(student);
        if(!student) throw "Can't add student";
        
        // await student.save();
        res.redirect(`../../classroom/class/${student.classroom}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

    const {totalPoints} = req.body;
    
    if (totalPoints !== '') {

        try {
        
            const options = {
                new: false,
            }

            Student.findOneAndUpdate(query,  {
                $inc: {
                    totalPoints: totalPoints,
                }
            }).then(res => console.log('RESULT', res));
        } catch (err) {
            console.log(err);
        }
        
    } else {
        
    }





    // if (update.totalPoints === '') {
    //     console.log('totalPoints are empty');
    // }


    

    
})

router.get('/delete/:id', isLoggedIn, async (req, res) => {
    console.log('delete student route');

    try {
        const student = await Student.findOne({_id: req.params.id })
        console.log(student);

        const classroom = student.classroom;
        await student.deleteOne();
        res.redirect(`../../classroom/class/${classroom}`)
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
})


        
module.exports = router;