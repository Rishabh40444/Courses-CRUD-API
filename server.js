const express = require('express')
const app = express()
const mongoose = require('mongoose')
const controller = require('./controllers/mainController.js')
const res = require('express/lib/response.js')
const apiImport = require("./routes/api.js")
const viewImport = require("./routes/viewRoutes.js")
const path = require("path")
const Course = require('./Models/CoursesModel.js')

// the code below tells express to use EJS as view engine and search for the view files in views folder.
app.set("view engine","ejs")
app.set("views",[path.join(__dirname,"views")])

app.use(express.json())

app.get('/index', (req, res) => {
    res.render('index', { title: 'Home', content: 'This is the home page' });
});

app.get('/about', (req, res) => {
    res.render('searchcoursebyid', { title: 'Search a Course', content: 'This is the about page' });
});

app.get('/work', (req, res) => {
    res.render('listallcourses', { title: 'Work', content: 'This is the work page' });
});





app.use(viewImport);

//app.use(apiImport);


// Connecting MongoDB to API
mongoose.connect("mongodb://127.0.0.1:27017/codemasters")
    .then(() => {
        console.log("Connected to MongoDB")

        app.listen(5000,()=>{
            console.log('http://127.0.0.1:5000');
        })
    }).catch((error)=>{
        console.log(error)

    })

