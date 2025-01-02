const products = [
    {
        categoryId: "1",
        img:"/assets/products/airpods-max.png",
        _id:"1",
        productName:"Air pods Max",
        price:500,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "3",
        img:"/assets/products/echo-dot.png",
        _id:"2",
        productName:"Echo Dot",
        price:99,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "2",
        img:"/assets/products/pixel-buds.png",
        _id:"3",
        productName:"Pixel Buds",
        price:440,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "5",
        img:"/assets/products/apple-watch.png",
        _id:"4",
        productName:"Apple Watch",
        price:600,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "4",
        img:"/assets/products/iphone-15.png",
        _id:"5",
        productName:"Iphone 15",
        price:650,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "4",
        img:"/assets/products/pixel-8.png",
        _id:"6",
        productName:"Pixel 8",
        price:330,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "1",
        img:"/assets/products/quietcomfort.png",
        _id:"7",
        productName:"Quite Comfort",
        price:100,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "3",
        img:"/assets/products/soundlink.png",
        _id:"8",
        productName:"Sound Link",
        price:250,
        productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    }

];

export  const getProducts = (req, res) => res.status(200).json(products).send()

export const createProducts = (req, res) => {
    
    products.push(req.body);
    res.status(201).send();
};

export const getProduct = (req, res) => {
    const id = req.params.id;
    const product = products.find((p) => p._id == id);
    res.status(200).json(product).send()
}

export const deleteProduct = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((p) => p._id == id);
    if(index !== -1){
        products.splice(index,1);
    }

    res.status(204).send()
}

export const updateProduct = (req, res) => {
    const id = req.params.id;
    const index = products.findIndex((p) => p._id == id);
    products[index] = req.body;
    res.status(200).send();
    
}

    


