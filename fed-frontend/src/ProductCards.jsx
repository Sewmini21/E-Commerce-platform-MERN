import ProductCard from "./ProductCard";
function ProductCards(props){
    return(
        <div className=" pt-3 grid grid-cols-4 space-x-2">
            {
                props.products.map((Product) => (
                    <ProductCard 
                    key = {Product._id}
                    productName={Product.productName}
                    price={Product.price}
                    img={Product.img}
                    productDescription={Product.productDescription}
                />
                ) )
            }
    </div>
    );

}
export default ProductCards;