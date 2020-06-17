// const express = require("express"),
//   User = require("../../db/models/user"),
//   Classroom = require("../../db/models/classroom"),
//   { isLoggedIn } = require("./middleware/auth");

import express from "express";
// import User from "../../db/models/user";
// import Classroom from "../../db/models/classroom";
// import { isLoggedIn } from "./middleware/auth";

const router = new express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

// module.exports = router;
// export { router };
export default router;
