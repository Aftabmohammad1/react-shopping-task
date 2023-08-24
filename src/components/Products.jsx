import { PRODUCTS } from '../product';
import ProductCard from './productsCards';
function Products({ addToCart, removeFromCart, cartItems }) {
    return (
        <div>
            <div className="container px-4 mt-5">
                <div className="row">
                    {PRODUCTS.map((data) => (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" key={data.id}>
                            <ProductCard product={data} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
                        </div>
                    ))}
                </div>
            </div>
        </div> 
    );
}

export default Products;