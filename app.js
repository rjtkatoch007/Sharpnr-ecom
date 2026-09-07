const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
//const routes = require("./route.js");
// Import Route Files
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Middleware for parsing JSON data (useful for POST requests)
app.use(express.static('public')); 
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
//app.use('/', routes);
// Integrate Routes with Base Paths
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);


//app.use(express.static(path.join(__dirname, "js")));

app.listen(port, ()=>{
    console.log(`Server is running @ ${port}`);
})