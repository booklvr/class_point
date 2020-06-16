const express = require("express"),
  User = require("../../db/models/user"),
  Classroom = require("../../db/models/classroom"),
  Student = require("../../db/models/student"),
  gameHelper = require("./helpers/gameHelper"),
  { isLoggedIn } = require("./middleware/auth");

const router = new express.Router();

// get the individual game
// * id = classroom._id
router.get("/individual/:id", async (req, res) => {
  console.log("made it to the individual game");

  try {
    const classroom = await Classroom.findById(req.params.id);
    res.render("pages/individual", { classroom });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

// get the boysVsGirls game
// * id = classroom._id
router.get("/boysVsGirls/:id", async (req, res) => {
  console.log("made it to the boys vs girls game");

  try {
    const classroom = await Classroom.findById(req.params.id);
    res.render("pages/boysVsGirls", { classroom });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});
router.get("/participation/:id", async (req, res) => {
  console.log("made it to the class participation score page");

  try {
    const classroom = await Classroom.findById(req.params.id);
    res.render("pages/participation", { classroom });
  } catch {
    console.log(err);
    res.status(404).send(err);
  }
});

// GET THE GAME FORM
router.get("/teamForm/:id", async (req, res) => {
  console.log("rendering game form");

  try {
    const classroom = await Classroom.findById(req.params.id);

    res.render("pages/team", { classroom });
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.get("/classData/:id", async (req, res) => {
  const data = [];

  try {
    const classroom = await Classroom.findById(req.params.id);
    try {
      await classroom
        .populate({
          path: "students", // populate questions
        })
        .execPopulate();
    } catch (err) {
      console.log(err);
    }

    res.send(classroom.students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/updatePoints", async (req, res) => {
  students = req.body;

  students.forEach((student) => {
    console.log("student.points", student.points);
    try {
      const query = { _id: student._id };

      const options = {
        new: false,
      };

      Student.findOneAndUpdate(query, {
        $inc: {
          totalPoints: student.points,
        },
      }).then((res) => console.log("RESULT", res));
    } catch (err) {
      console.log(err);
    }
  });
});

router.post("/updateParticipation", async (req, res) => {
  students = req.body;

  students.forEach((student) => {
    console.log("student.points", student.points);
    try {
      const query = { _id: student._id };

      const options = {
        new: false,
      };

      Student.findOneAndUpdate(query, {
        $inc: {
          participationPoints: student.points,
        },
      }).then((res) => console.log("RESULT", res));
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
// export { router };
// export default router;
