const express = require('express');
const app = express();

app.use(express.json()); // middleers => takes a function and changes it to json 

let courses = [
    { id: 1, name: "java"},
    { id: 2, name: "javascript"},
    { id: 3, name: "python"}
];


// defining a route
app.get('/courses',(req, res) => {               //app.get('/courses', (req, res) => { ... }) is a route handler that listens for GET requests at the /courses URL path.
    res.json(courses);                           //(req, res) => { ... } is a callback function that gets executed when the route is accessed. req is the request object and res is the response object.
                                                 //res.json(courses); sends the courses array as a JSON response to the client.
})

app.post('/courses',(req, res) => {
    console.log(req.body);
    const newCourses = {
        id: courses.length +1,
        name: req.body.name 
    };
    courses.push(newCourses);
    res.send(courses);
})


// starting the server
//app.listen(3000, () => { ... }) starts the server on port 3000.
app.listen(3000, () => {
    console.log("server started");                //() => { console.log("server started"); } is a callback function that logs "server started" to the console when the server is up and running.
})