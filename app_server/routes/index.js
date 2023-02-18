const express = require("express");
const router = express.Router();
const ctrlLocations = require("../controllers/locations");
const ctrlOthers = require("../controllers/others");

/*
const ctrlMain = require('../controllers/main');
*/

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/*const homepageController = (req, res) => {
res.render('index', { title: 'Express'});
};*/
/* GET home page. */

/* Locations pages */
router.get("/", ctrlLocations.homelist);
router.get("/location/:locationid", ctrlLocations.locationInfo);
router
  .route("/location/:locationid/review/new")
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);

/* Other pages */
router.get("/about", ctrlOthers.about);

module.exports = router;
