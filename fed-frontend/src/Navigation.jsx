
import { ShoppingCart } from "lucide-react";

function Navigation(props){
    return (
        <>
            <nav className = "flex items-center justify-between p-6 mx-4">
                <div className="navbar flex gap-x-16">
                    <a className="navbar-brand text-2xl font-bold" href="#">Mebius</a>
                    <div className="navbar-links flex items-center gap-x-4">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                    </div>
                </div>
                <div className="cart-details flex gap-x-4">
                    <div>
                    <a className = "flex items-center gap-x-4 relative" href="#">
                    <p>{props.count}</p>
                    <div className="cart-icon flex items-center gap-1">
                        <ShoppingCart/>
                        Cart
                    </div>
                    </a>
                    </div>
                    <p>Hi,{props.name}</p>
                </div>
            </nav>
            <div className="seperator border-t-4 rounded-md"></div>
        </>
    )
}

export default Navigation;