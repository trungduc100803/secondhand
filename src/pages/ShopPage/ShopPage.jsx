import ProductItem from '../../components/componentsSub/ProductItem/ProductItem'
import Navigations from '../../components/componentsSub/Navigations/Navigations';
import './ShopPage.css'
import { 
    plus, 
    chat,
    store,
    users,
    userPlus,
    userCheck,
    star,
    list,
    caretRight
} from '../../assets/icon';

function ShopPage() {
    // const handleActiveItem = (e) => {
    //     const item = e.target
    //     const itemActive = document.querySelector('.active')
    //     itemActive.classList.remove('active')
    //     item.classList.add('active')
    // }

    const handleActiveMenu = (e) => {
        const item = e.target
        const itemActive = document.querySelector('.activeMenu')
        itemActive.classList.remove('activeMenu')
        item.parent.classList.add('activeMenu')
    }


    return <div className="shopPage">
       <div className="shop-head">
            <div className="shop-head__top">
                <div className="shop-head__top-left">
                    <div className="shop">
                        <div className="shop-logo">
                            <div className="logo-img">
                                <img src="data:image/jpeg;base64,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" alt="" />
                            </div>
                            <div className="shop-des">
                                <h1 className="shop-name">amee</h1>
                                <div className="shop-status">online 30 phut truoc</div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-btns">
                        <div className="shop-btn follow">
                            <span>{plus}</span>
                            <p>Theo doi</p>
                        </div>
                        <div className="shop-btn chat">
                            <span>{chat}</span>
                            <p>Chat</p>
                        </div>
                    </div>
                </div>
                <div className="shop-head__top-right">
                    <div className="shop-head__top-right-child">
                        <div className="shop-head__top-right-child-logo">{store}</div>
                        <div className="shop-head__top-right-child-title">Sản phẩm: </div>
                        <div className="shop-head__top-right-child-qual">1,3k</div>
                    </div>
                    <div className="shop-head__top-right-child">
                        <div className="shop-head__top-right-child-logo">{users}</div>
                        <div className="shop-head__top-right-child-title">Người theo dõi: </div>
                        <div className="shop-head__top-right-child-qual">1,3k</div>
                    </div>
                    <div className="shop-head__top-right-child">
                        <div className="shop-head__top-right-child-logo">{userPlus}</div>
                        <div className="shop-head__top-right-child-title">Đang theo: </div>
                        <div className="shop-head__top-right-child-qual">1,3k</div>
                    </div>
                    <div className="shop-head__top-right-child">
                        <div className="shop-head__top-right-child-logo">{star}</div>
                        <div className="shop-head__top-right-child-title">Đánh giá: </div>
                        <div className="shop-head__top-right-child-qual">1,3k</div>
                    </div>
                    <div className="shop-head__top-right-child">
                        <div className="shop-head__top-right-child-logo">{chat}</div>
                        <div className="shop-head__top-right-child-title">Tỉ lệ phản hồi chat: </div>
                        <div className="shop-head__top-right-child-qual">100%</div>
                    </div>
                    <div className="shop-head__top-right-child">
                        <div className="shop-head__top-right-child-logo">{userCheck}</div>
                        <div className="shop-head__top-right-child-title">Tham gia: </div>
                        <div className="shop-head__top-right-child-qual">1,3k</div>
                    </div>
                    
                </div>
            </div>
            <div className="shop-head__bott">
                <div className="nav-shop">
                    {/* <a href='#exam' onClick={handleActiveItem} className='nav-item active'>Dạo</a> */}
                    {/* <a href='#all' onClick={handleActiveItem} className='nav-item'>Tất cẩn phẩm</a> */}
                    {/* <Navigations /> */}
                </div>
            </div>
       </div>
       <div className="shop-container">
            <div id='exam' className="shop-exam">
                <h1>GỢI Ý CHO CHO BẠN</h1>
                <div className="shop-exam__product">
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                    <div className="div-shop-exam__product">
                        <ProductItem/>
                    </div>
                </div>
                <div className="shop-exam__banner">
                    <img src="https://img.ws.mms.shopee.vn/vn-11134210-23010-wgeif1x7tamvff.webp" alt="" />
                </div>
                <div className="shop-exam__img">
                    <img src="https://img.ws.mms.shopee.vn/40268bdeb27645deec2bdd06b1825936" alt="" />
                </div>
            </div>
            <div id='all' className="shop-all">
                <h1>TẤT CẢ SẢN PHẢM</h1>
                <div className="shop-all__container">
                    <div className="shop-all__container-left">
                        <div className="container-left__heading">
                            <span>{list}</span>
                            <p>Danh mục</p>
                        </div>
                        <div className="container-left__list">
                            <li onClick={handleActiveMenu} className="container-left__item activeMenu">
                                <span className='item-around'>{caretRight}</span>
                                <span className="title">Sản phẩm</span>
                            </li>
                            <li onClick={handleActiveMenu} className="container-left__item">
                                <span className='item-around'>{caretRight}</span>
                                <span className="title">Bán chạy nhất</span>
                            </li>
                        </div>
                    </div>
                    <div className="shop-all__container-right">
                        <div className="shop-all__container-right-div">
                            <div className="shop-all__container-right-item">
                                <ProductItem/>
                            </div>
                            <div className="shop-all__container-right-item">
                                <ProductItem/>
                            </div>
                            <div className="shop-all__container-right-item">
                                <ProductItem/>
                            </div>
                            <div className="shop-all__container-right-item">
                                <ProductItem/>
                            </div>
                            <div className="shop-all__container-right-item">
                                <ProductItem/>
                            </div>
                            <div className="shop-all__container-right-item">
                                <ProductItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
}

export default ShopPage;