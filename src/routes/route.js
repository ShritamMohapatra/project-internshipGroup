const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const midwareController=require("../controllers/midwareController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// Phase - 1

// create author
router.post("/createAuthor", authorController.createAuthor)

//  create blog
router.post("/createBlog", blogController.createBlog)










module.exports = router;