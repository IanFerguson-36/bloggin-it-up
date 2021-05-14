const router = require("express").Router();
const { BlogPosts, Comment, User } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    console.log("hello");
    res.render("blogposts");
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  try {
    res.render("loginscreen");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
