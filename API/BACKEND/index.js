import express from 'express';

const app = express();
app.get('/api/products', (req,res) => {
    const product = [
        {
            id:1,
            name:'table wooden',
            price:200,
            image:''
        },
        {
            id:2,
            name:'table wooden',
            price:200,
            image:''
        },
        {
            id:3,
            name:'table wooden',
            price:200,
            image:''
        },
        {
            id:4,
            name:'table wooden',
            price:200,
            image:''
        },
        {
            id:5,
            name:'table wooden',
            price:200,
            image:''
        },
    ]

    if(req.query.search){
        const filterProduct = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProduct);
        return;
    }
    setTimeout (() => {
        res.send(product);
    }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});