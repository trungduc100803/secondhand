import { useContext } from 'react';
import { Link } from 'react-router-dom';


import './CartPage.css'
import { AppContext } from '../../Context/AppContext';
import Model from '../../components/Model/Model'
import Button from '../../components/componentsSub/Button/Button'
import Number from '../../components/Number/Number';

function CartPage() {
    const { setActiveModel } = useContext(AppContext)
    const handleVisibilityModelCart = () => {
        setActiveModel('active')
    }


    return <div className="cart-page">
        <div className="cart-nav">
            <div className="cart-nav__left">
                <div className="cart-check"></div>
                <div className="cart-nav__title">Sản phẩm</div>
            </div>
            <div className="cart-nav__right">
                <div className="cart-nav__title">Đơn giá</div>
                <div className="cart-nav__title">Số lượng</div>
                <div className="cart-nav__title">Số tiền</div>
                <div className="cart-nav__title">Thao tác</div>
            </div>
        </div>

        <div className="cart-product">
            <div className="cart-product__left">
                <div className="cart-check"></div>
                <div className="cart-product__detail">
                    <div className="cart-product__detail-img">
                        <img src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="cart-product__detail-title">
                        GIẢM GIÁ - Áo thun POLO thiết kế vải cá sấu cotton cao cấp ng
                    </div>
                    <div className="cart-product__detail-nav">
                        <div onClick={handleVisibilityModelCart} className="cart-product__detail-nav-title">Phân loại hàng</div>
                        <Model>
                            <div className="cart-product__detail-model">
                                <div className="cart-product__detail-model-title">MẪU</div>
                                <div className="cart-product__detail-model-list">
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Poljndfjknjvno04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                    <div className="cart-product__detail-model-item">Polo04</div>
                                </div>
                                <div className="cart-product__detail-model-title">SIZE</div>
                                <div className="cart-product__detail-model-list">
                                    <div className="cart-product__detail-model-item">S</div>
                                    <div className="cart-product__detail-model-item">M</div>
                                    <div className="cart-product__detail-model-item">L</div>
                                    <div className="cart-product__detail-model-item">XL</div>
                                    <div className="cart-product__detail-model-item">XXL</div>
                                    <div className="cart-product__detail-model-item">XXXL</div>
                                </div>
                                <div className="cart-product__detail-btn">
                                    <Button text={'XÁC NHẬN'}/>
                                </div>
                            </div>
                        </Model>
                    </div>
                </div>
            </div>

            <div className="cart-product__right">
                <div className="cart-product__price">
                    <div className="cart-product__price-current">125.000đ</div>
                    <div className="cart-product__price-sale">99.000đ</div>
                </div>
                <div className="cart-product__qual">
                    <Number/>
                </div>
                <div className="cart-product__result">99.000đ</div>
                <div className="cart-product__delete">Xóa</div>
            </div>
        </div>

        <div className="cart-footer">
            <div className="cart-footer__left">
                <div className="cart-footer__title">Tổng thanh toán</div>
                <div className="cart-footer__result-price">204.000đ</div>
            </div>
            <Link to={'/checkPage'} className="cart-footer__btn">
                <Button text={'Mua ngay'}/>
            </Link>
        </div>
    </div>
}

export default CartPage;