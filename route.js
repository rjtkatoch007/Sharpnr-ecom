const express = require("express");
const router = express.Router();



router.get("/welcome", (req, res)=>{
    const username = req.query.username || 'rajat'; 
    const role = req.query.role || 'author';
    res.json(`Welcome - ${username} your role is ${role}`);
})

let products = [
    {id: 1, name: 'Samsung Galaxy F14'},
    {id: 2, name: 'HP Pavillion'}
]

router.get('/products', (req, res)=>{
    res.json({products});
})

router.get('/products/:id', (req, res)=>{
    const proId = parseInt(req.params.id);
    const prod = products.find((p=>p.id===proId)) 
       

    if(!prod){
        return res.status(404).json({message: "Product not found"});
    }

    res.json(prod);

})

router.post('/products', (req, res)=>{
    const {name} = req.body;
    const newProduct = {id:products.length+1, name};
    products.push(newProduct);
    res.status(201).json(newProduct);
})


router.get('/categories', (req, res)=>{
    res.json("Here is the list of all categories.");
})

router.post('/categories', (req, res)=>{
    res.json("A new category has been created.");
})

router.all('*any', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

module.exports = router