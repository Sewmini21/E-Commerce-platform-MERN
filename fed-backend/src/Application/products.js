import NotFoundError from ".././Domain/errors/not-found-error.js";

const products = [
    {
        categoryId: "1",
        img: "/assets/products/airpods-max.png",
        _id: "1",
        productName: "Air pods Max",
        price: 500,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "3",
        img: "/assets/products/echo-dot.png",
        _id: "2",
        productName: "Echo Dot",
        price: 99,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "2",
        img: "/assets/products/pixel-buds.png",
        _id: "3",
        productName: "Pixel Buds",
        price: 440,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "5",
        img: "/assets/products/apple-watch.png",
        _id: "4",
        productName: "Apple Watch",
        price: 600,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "4",
        img: "/assets/products/iphone-15.png",
        _id: "5",
        productName: "Iphone 15",
        price: 650,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "4",
        img: "/assets/products/pixel-8.png",
        _id: "6",
        productName: "Pixel 8",
        price: 330,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "1",
        img: "/assets/products/quietcomfort.png",
        _id: "7",
        productName: "Quite Comfort",
        price: 100,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    },
    {
        categoryId: "3",
        img: "/assets/products/soundlink.png",
        _id: "8",
        productName: "Sound Link",
        price: 250,
        productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    }

];

export const getProducts = (req, res, next) => {
    try {
        res.status(200).json(products).send()
    } catch (error) {
        next(error)
    }

}

export const createProducts = (req, res, next) => {
    try {
        products.push(req.body);
        res.status(201).send();
    } catch (error) {
        next(error)
    }

};

export const getProduct = (req, res, next) => {
    try {
        const id = req.params.id;
        const product = products.find((p) => p._id == id);
        if (!product) {
            throw new NotFoundError("Product Not Found");
        }

        return res.status(200).json(product).send();

    } catch (error) {
        next(error)
    }

}

export const deleteProduct = (req, res, next) => {
    try {
        const id = req.params.id;
        const index = products.findIndex((p) => p._id == id);
        if (index === -1) {
            throw new NotFoundError("Product Not Found");
        }
        products.splice(index, 1);
        res.status(204).send();

    } catch (error) {
        next(error)
    }


}

export const updateProduct = (req, res, next) => {
    try {
        const id = req.params.id;
        const product = products.find((p) => p._id == id);
        if (!product) {
            throw new NotFoundError("Product Not Found");
        }
        product.productDescription = req.body.productDescription;
        res.status(200).send();

    } catch (error) {
        next(error)
    }


}




