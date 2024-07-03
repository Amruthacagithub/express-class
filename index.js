// const express = require('express');
// const app = express();

// app.use(express.json()); // middleers => takes a function and changes it to json 

// let courses = [
//     { id: 1, name: "java"},
//     { id: 2, name: "javascript"},
//     { id: 3, name: "python"}
// ];


// // defining a route
// app.get('/courses',(req, res) => {               //app.get('/courses', (req, res) => { ... }) is a route handler that listens for GET requests at the /courses URL path.
//     res.json(courses);                           //(req, res) => { ... } is a callback function that gets executed when the route is accessed. req is the request object and res is the response object.
//                                                  //res.json(courses); sends the courses array as a JSON response to the client.
// })

// app.post('/courses',(req, res) => {
//     console.log(req.body);
//     const newCourses = {
//         id: courses.length +1,
//         name: req.body.name 
//     };
//     courses.push(newCourses);
//     res.send(courses);
// })


// // starting the server
// //app.listen(3000, () => { ... }) starts the server on port 3000.
// app.listen(3000, () => {
//     console.log("server started");                //() => { console.log("server started"); } is a callback function that logs "server started" to the console when the server is up and running.
// })


const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(middleware);
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let courses = [
    {id:1 , name: "java"},
    {id:2 , name:"javascript"},
    {id:3 , name:"python"}
]

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/course', (req, res) => {
    res.json(courses);
  })
  
app.post('/course',(req,res)=>{
    console.log(req.body);
    let singCor = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(singCor);
    res.send("updated");
})

app.put('/course',(req,res)=>{
    const c = {
        id : req.body.id,
        name : req.body.name
    }
    courses[req.body.id-1] = c;
    res.send("done !");
})

app.delete('/course',(req,res)=>{
    courses.splice(req.body.id-1,1);
    res.send("deleted");
})

function middleware(req,res,next){
    console.log("called");
    next();
}

function logger(req,res,next){
    const method = req.method;
    const ip = req.ip;
    const date = new Date().toISOString();
    const hostname = req.hostname;

    console.log(`${date}: ${method} ${req.originalUrl} from ${ip} (${hostname})`);

    next();
}