const express = require('express')
const common = require('../controllers/codemastersController.js')
const router = express.Router();

//router.get("/",common.createCourse)
router.get("/listallcourses",common.listofAllCourses)
router.get("/searchcoursebyid",common.searchCourse)
router.get("/updatecourse",common.updateCourse)
router.get("/deletecourse",common.deleteCourse)


module.exports = router;