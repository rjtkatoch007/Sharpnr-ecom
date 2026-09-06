const express = require("express");
const app = express();
const port = 4000;
const routes = require("./route.js");

// Middleware for parsing JSON data (useful for POST requests)
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("<h2>Ecommerce app</h2>");
})

//logging middleware
app.use((req, res, next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})
// Connect the router to the main server
app.use('/', routes);



app.listen(port, ()=>{
    console.log(`Server is running @ ${port}`);
})