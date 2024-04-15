const express = require('express')
const common = require('../controllers/mainController')
const router = express.Router();
router.post("/course",common.createTutorial);
router.get("/courses",common.getAllTutorials);
router.get("/course/:id",common.getTutorialByID);
router.put("/course/:id",common.updateTutorialByID);
router.delete("/course/:id",common.deleteTutorialByID);




module.exports = router