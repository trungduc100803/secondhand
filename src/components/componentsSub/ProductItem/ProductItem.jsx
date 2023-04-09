import { Link } from 'react-router-dom';
import './ProductItem.css'

function ProductItem({product}) {
        return <div className="productItem">
            <Link to={`/product/ + ${product.id}`} className="home-product-item">
                <div className="product-img" style={{backgroundImage: `url(${product.URLimage[0]})`}}></div>
                <div className="home-product-info">
                    <span className="home-product-name">{product.name}</span>
                    <div className="home-product-des">{product.descriptions}</div>
                    <div className="home-product-price">
                        <div className="home-product-price-current">150K</div>
                        <div className="home-product-price-sale">{product.price}</div>
                        <div className="home-product-address">{product.address}</div>
                    </div>
                </div>
            </Link>
        </div>
}

export default ProductItem;