import "./productList.css";
import Product from "../product/Product.jsx";
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
            
            <p className="pl-desc">
                Algunos de mis proyectos más recientes
            </p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
            <Product key={item.id} img={item.img} link= {item.link}/>
            ))}
        </div>
        </div>
    );
};

export default ProductList;
