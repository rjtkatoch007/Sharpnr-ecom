const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("product added");
    const product = e.target.productName.value;

    const obj={
        "productName":product
    }

    axios.post("http://localhost:4000"+"/api/products",obj).then((result)=>{
        console.log("Value returned from post request:"+result.data.value);
    })
}