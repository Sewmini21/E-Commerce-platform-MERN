import ProductCard from "./ProductCard";
function ProductCards(props){
    return(
        <div className=" pt-3 grid grid-cols-4 space-x-2">
            {
                props.products.map((Product) => (
                    <ProductCard 
                    key = {Product._id}
                    name={Product.name}
                    price={Product.price}
                    image={Product.image}
                    description={Product.description}
                />
                ) )
            }
    </div>
    );

}
export default ProductCards;