const express = require("express"),
  passport = require("passport"),
  User = require("../../db/models/user"),
  Classroom = require("../../db/models/classroom"),
  { isLoggedIn } = require("./middleware/auth");

const router = new express.Router();

// GET USER's CLASSROOM
router.get("/me", isLoggedIn, async (req, res) => {
  console.log("get logged in User classroom");

  // const classrooms = Classrooms.find({User: req.user._id})
  // res.send('classrooms');

  res.render("pages/classrooms");
});

// REGISTER USER FORM
router.get("/", (req, res) => {
  console.log("get register form");
  res.render("pages/register");
});

// REGISTER NEW User
router.post("/", async (req, res) => {
  console.log("registering new user");

  try {
    if (req.body.password !== req.body.password2) {
      throw new Error("passwords do not match");
    }

    const newUser = {
      ...req.body,
    };
    delete newUser.password;
    delete newUser.password2;

    console.log(newUser);

    const user = new User(newUser);

    User.register(user, req.body.password, (err, user) => {
      if (err) {
        console.log("error while registering user: ", err);
        return res.send(err);
      }
      passport.authenticate("local")(req, res, function () {
        // req.flash("success", "successfully signed up! nice to meet you " + req.body.username);
        res.redirect("../classroom");
      });
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ error: "server error" });
  }
});

//LOGIN USER FORM
router.get("/login", async (req, res) => {
  console.log("get login form");

  res.render("pages/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    // failureFlash: true,
    // successFlash: "Try answering some questions."
  }),
  function (req, res) {
    res.redirect("/classroom");
  }
);

//LOGOUT USER
router.get("/logout", async (req, res) => {
  console.log("");

  req.logout();
  // req.flash('success', 'See you later!');
  res.redirect("/");
});

//UPDATE USER FORM
router.get("/update", async (req, res) => {
  console.log("get update form");

  res.send("test");
});

//UPDATE USER
router.post("/update", isLoggedIn, async (req, res) => {
  console.log("updating user");

  res.send("test");
});

// CONFIRM DELETE FORM
//* maybe use confirm javascript
router.get("/confirmDelete", isLoggedIn, async (req, res) => {
  console.log("get confirm delete form");

  res.send("test");
});

// CONFIRM DELETE
router.post("/confirmDelete", isLoggedIn, async (req, res) => {
  console.log("confirming user delete");

  res.send("test");
});

// DELETE USER FORM
router.get("/delete", isLoggedIn, async (req, res) => {
  console.log("get delete form");

  res.send("test");
});

// DELETE USER
router.get("/delete", isLoggedIn, async (req, res) => {
  console.log("delete user");

  res.send("test");
});

module.exports = router;
// export { router };
// export default router;
