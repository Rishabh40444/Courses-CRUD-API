const { type, links } = require('express/lib/response');
const mongoose = require('mongoose');
/* in order to create the Courses Model, we need to create a courses model schema
In this schema, we will mention some features or data about the courses.

*/

const coursesSchema = mongoose.Schema({
    courseID:{
        type:Number,
        required:[true,"Please specify an ID for this Course :"]

   },
    
    courseName:{
        type:String,
        required:[true,"Please specify name for the Course :"]
    },

    courseImage:{
        type:String,
        required:[true,"Please specify the link of the image for the Course :"]
    },
    
    courseDescription:{
        type:String,
        required:[true,"Please provide some description for this Course :"]

    },
   
    courseCategoryName:{
        type:Array,
        required:[true,"Please mention the name of the Category Name :"]

    },
    coursePracticeSection:{
        type:Array,
        required:[true,"Please provide some practice exercises for the Course :"]
    }

    

},{
    timestamps: true  // -> timestamps creates 2 fields when the data is created and when data is updated in the database.

});

// created the model course below:
const Course = mongoose.model("Course",coursesSchema);

module.exports = Course;
