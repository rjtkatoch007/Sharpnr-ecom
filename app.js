const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("<h2>Ecommerce app</h2>");
})

//logging middleware
app.use((req, res, next)=>{
    console.log(`${req.method} request made to ${req.url}`);
    next();
})

app.get("/welcome", (req, res)=>{
    const username = req.query.username || 'rajat'; 
    const role = req.query.role || 'author';
    res.json(`Welcome - ${username} your role is ${role}`);
})

let products = [
    {id: 1, name: 'Samsung Galaxy F14'},
    {id: 2, name: 'HP Pavillion'}
]

app.get('/products', (req, res)=>{
    res.json({products});
})

app.get('/products/:id', (req, res)=>{
    const proId = parseInt(req.params.id);
    const prod = products.find((p=>p.id===proId)) 
       

    if(!prod){
        return res.status(404).json({message: "Product not found"});
    }

    res.json(prod);

})

app.post('/products', (req, res)=>{
    const {name} = req.body;
    const newProduct = {id:products.length+1, name};
    products.push(newProduct);
    res.status(201).json(newProduct);
})


app.get('/categories', (req, res)=>{
    res.json("Here is the list of all categories.");
})

app.post('/categories', (req, res)=>{
    res.json("A new category has been created.");
})

app.all('*any', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, ()=>{
    console.log(`Server is running @ ${port}`);
})