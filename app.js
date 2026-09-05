const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Ecom APP");
})

let products = [
    {id: 1, name: 'Samsung Galaxy F14'},
    {id: 2, name: 'HP Pavillion'}
]

app.get('/products', (req, res)=>{
    res.json({
        message: "Here is the list of all products",
        data: products
    });
})

app.post('/products', (req, res)=>{
    const {name} = req.body;
    const newProduct = {id:products.length+1, name};
    products.push(newProduct);
    res.status(201).json(`A new product has been added ${newProduct}`);
})


app.get('/categories', (req, res)=>{
    res.json("Here is the list of all categories.");
})

app.post('/categories', (req, res)=>{
    res.json("A new category has been created.");
})

/* app.all('*', (req, res) => {
    res.json("Route does not exist");
});
 */

app.listen(port, ()=>{
    console.log(`Server is running @ ${port}`);
})