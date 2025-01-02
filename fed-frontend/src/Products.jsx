
import ProductCards from "./ProductCards";
import { Separator } from "./components/ui/separator";
import Tab from "./Tab";
import { useState } from "react";

function Product() {
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

    const categories = [
        {_id: "ALL" , name:"ALL"},
        {_id: "1" , name:"Headphones"},
        {_id: "2" , name:"Earbuds"},
        {_id: "3" , name:"Speakers"},
        {_id: "4" , name:"Mobile phones"},
        {_id: "5" , name:"Smart Watches"}
    ];

    const [selectedCategoryId, setSelectedCategoryId] = useState("1");
    const filteredProducts = selectedCategoryId === "ALL"
    ?products
    :products.filter((product)=>product.categoryId === selectedCategoryId);

    const handleTabClick = (_id) => {
        setSelectedCategoryId(_id)
    }

    return (
      
            <section className="px-8 py-8">
                <h2 className=" text-xl font-bold">Our Top Products</h2>
                <Separator mt-2 />
                <div className="mt-4 flex items-center gap-4">
                {categories.map((category) => (
                    <Tab key = {category._id} 
                    _id = {category._id}
                    selectedCategoryId = {selectedCategoryId}
                    name = {category.name}
                    onTabClick = {handleTabClick}/>
                ))}
                </div>  
            <ProductCards products = {filteredProducts}/>
            </section>

    );
}

export default Product;