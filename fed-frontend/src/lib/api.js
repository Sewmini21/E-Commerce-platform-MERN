    export const getProducts = async () => {
        const res = await fetch("http://localhost:8000/products",{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            },
        });
        const data = await  res.json();
        return data;
        
        
    };

    // const products = [
    //     {
    //         categoryId: "1",
    //         img:"/assets/products/airpods-max.png",
    //         _id:"1",
    //         productName:"Air pods Max",
    //         price:500,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "3",
    //         img:"/assets/products/echo-dot.png",
    //         _id:"2",
    //         productName:"Echo Dot",
    //         price:99,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "2",
    //         img:"/assets/products/pixel-buds.png",
    //         _id:"3",
    //         productName:"Pixel Buds",
    //         price:440,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "5",
    //         img:"/assets/products/apple-watch.png",
    //         _id:"4",
    //         productName:"Apple Watch",
    //         price:600,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "4",
    //         img:"/assets/products/iphone-15.png",
    //         _id:"5",
    //         productName:"Iphone 15",
    //         price:650,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "4",
    //         img:"/assets/products/pixel-8.png",
    //         _id:"6",
    //         productName:"Pixel 8",
    //         price:330,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "1",
    //         img:"/assets/products/quietcomfort.png",
    //         _id:"7",
    //         productName:"Quite Comfort",
    //         price:100,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     },
    //     {
    //         categoryId: "3",
    //         img:"/assets/products/soundlink.png",
    //         _id:"8",
    //         productName:"Sound Link",
    //         price:250,
    //         productDescription:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, dolorem."
    //     }

    // ];
