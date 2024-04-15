const Course = require('../Models/CoursesModel.js')

 


const listofAllCourses = async(req,res)=>{
    try{
        const course = await Course.find({});
        res.status(200).render("listallcourses",{courses:course});
        //  res.status(200).json(course);
    
    }catch(error){
        console.log(error.message)
        res.status(500).render({message:error.message});
    }
}

const searchCourse = async(req,res)=>{
    try{
        const course = await Course.find({});
        res.status(200).render("searchcoursebyid",{courses:course});
        //  res.status(200).json(course);
    
    }catch(error){
        console.log(error.message)
        res.status(500).render({message:error.message});
    }
}

const updateCourse = async(req,res)=>{
    try{
        const course = await Course.update({});
        res.status(200).render("updatecourse",{courses:course});
        //  res.status(200).json(course);
    
    }catch(error){
        console.log(error.message)
        res.status(500).render({message:error.message});
    }
}
const deleteCourse = async(req,res)=>{
    try{
        const course = await Course.delete({});
        res.status(200).render("listallcourses",{courses:course});
        //  res.status(200).json(course);
    
    }catch(error){
        console.log(error.message)
        res.status(500).render({message:error.message});
    }
}






module.exports = {listofAllCourses,searchCourse,updateCourse,deleteCourse};






