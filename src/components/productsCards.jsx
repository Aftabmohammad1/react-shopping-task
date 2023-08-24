import { PRODUCTS } from '../product';
import './productStyles.css';

export default function ProductCard({ product, addToCart, removeFromCart, cartItems }) {
    const isItemInCart = cartItems.some(item => item.id === product.id);

    const toggleCartItem = () => {
        if (isItemInCart) {
            removeFromCart(product);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="card mb-4" key={product.id}>
            <header>
                <img className="card-img-top" src={product.productImage} alt={product.productName} />
            </header>
            <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text text-black fw-bold">₹{product.price}</p>
            </div>
            <div className="card-footer border-top-0 p-4 pt-0 text-center bg-transparent">
                <button className={`btn ${isItemInCart ? "btn-danger" : "btn-primary"}`} onClick={toggleCartItem} type="button">
                    {isItemInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}

