import NotFoundError from "../Domain/errors/not-found-error.js";
import Category from "../Infrastructure/schemas/Category.js";

// const products = [
//     {
//         categoryId: "1",
//         img: "/assets/products/airpods-max.png",
//         _id: "1",
//         productName: "Air pods Max",
//         price: 500,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "3",
//         img: "/assets/products/echo-dot.png",
//         _id: "2",
//         productName: "Echo Dot",
//         price: 99,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "2",
//         img: "/assets/products/pixel-buds.png",
//         _id: "3",
//         productName: "Pixel Buds",
//         price: 440,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "5",
//         img: "/assets/products/apple-watch.png",
//         _id: "4",
//         productName: "Apple Watch",
//         price: 600,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "4",
//         img: "/assets/products/iphone-15.png",
//         _id: "5",
//         productName: "Iphone 15",
//         price: 650,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "4",
//         img: "/assets/products/pixel-8.png",
//         _id: "6",
//         productName: "Pixel 8",
//         price: 330,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "1",
//         img: "/assets/products/quietcomfort.png",
//         _id: "7",
//         productName: "Quite Comfort",
//         price: 100,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     },
//     {
//         categoryId: "3",
//         img: "/assets/products/soundlink.png",
//         _id: "8",
//         productName: "Sound Link",
//         price: 250,
//         productDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
//     }

// ];

export const getCategories = async (req, res, next) => {
    try {
        const data = await Category.find();
        res.status(200).json(data).send()
    } catch (error) {
        next(error)
    }

}

export const createCategories = async (req, res, next) => {
    try {
        await Category.create(req.body);
        res.status(201).send();
    } catch (error) {
        next(error)
    }

};

export const getCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const category = await Category.findById(id);
        if (!category) {
            throw new NotFoundError("Product Not Found");
        }

        return res.status(200).json(category).send();

    } catch (error) {
        next(error)
    }

}

export const deleteCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            throw new NotFoundError("Product Not Found");
        }
        res.status(204).send();
    } catch (error) {
        next(error)
    }
}

export const updateCategory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const category = await Category.findByIdAndUpdate(id, req.body);
        if (!category) {
            throw new NotFoundError("Product Not Found");
        }
        
        res.status(200).send(category);

    } catch (error) {
        next(error)
    }


}




