
const Course = require('../Models/CoursesModel.js')



const createTutorial = async(req,res)=>{

    /* console.log(req.body);
     res.send(req.body)
     */
     try{
         const course = await Course.create(req.body)
         res.status(200).json(course);
     }catch(error){
         console.log(error.message);
         res.status(500).json({message:error.message})
     }
 
 
}

const getAllTutorials = async(req,res)=>{
    try{
        const course = await Course.find({});
        res.status(200).json(course);
    
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

const getTutorialByID = async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findById(id);
        res.status(200).json(course);
    }catch(error){
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

const updateTutorialByID = async(req,res)=>{
    try{
        const {id} = req.params;
        const course = await Course.findByIdAndUpdate(id,req.body);

        // if the course is not found or not updated
        if(!course){
            return res.status(404).json({message:`Could not find any course with ID ${id}`})

        }else{
            const updatedCourse = await Course.findById(id);
            res.status(200).json(updatedCourse);
        }
        
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }  
}


const deleteTutorialByID = async(req,res)=>{
    try{ 
        const {id} = req.params;
        const course = await Course.findByIdAndDelete(id);
        // if the API couldnot delete the course with the specified id
        if(!course){
            return res.status(404).json({message:`Couldnot find any course with the ID ${id}`});
        }else{
           
            res.status(200).json(course);
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
}


module.exports = {createTutorial,getAllTutorials,getTutorialByID,updateTutorialByID,deleteTutorialByID};



