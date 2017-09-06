var express = require("express");
var articlesController = require("../controllers/articlesController");
var router = new express.Router();
// Get all articles (or optionally a specific quote with an id)
router.get("/articles", articlesController.index);
// Create a new quote using data passed in req.body
router.post("/articles", articlesController.create);
// Delete a specific quote using the id in req.params.id
router.post("/delete/:id", articlesController.destroy);
module.exports = router;