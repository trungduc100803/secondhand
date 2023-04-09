import './ProductPage.css'
import { left, right } from '../../assets/icon/index'
import ProductItem from '../../components/componentsSub/ProductItem/ProductItem'
import MovePage from '../../components/componentsSub/MovePage/MovePage'
import Search from '../../components/componentsSub/Search/Search'
import useData from '../../hook/useData/useData'


function Product() {

    const catalogs = [
        {
            catalogImg: 'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
            catalogName: 'Thời trang nam'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
            catalogName: 'Thiêt bị điện tử'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
            catalogName: 'Giày nam'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
            catalogName: 'Thời trang nữ'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn',
            catalogName: 'Giày dép nữ'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn',
            catalogName: 'Sách vở'
        },
        {
            catalogImg: '	https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn',
            catalogName: 'Mẹ và bé'
        },
        {
            catalogImg: '	https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn',
            catalogName: 'Đồng hồ'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn',
            catalogName: 'Bóng'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn',
            catalogName: 'Thiết bị gia dụng'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn',
            catalogName: 'Thời trang trẻ em'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/e4fbccba5e1189d1141b9d6188af79c0_tn',
            catalogName: 'Dụng cụ'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
            catalogName: 'Trang sức'
        },
        {
            catalogImg: 'https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn',
            catalogName: 'Đồ chơi'
        },
        
    ]

    const listProduct = useData('products')


    return <div className="productPage">
        <div className="searchProduct">
            <Search/>
        </div>

        <div className="catalog">
            <div className="catalog-heading">Danh mục</div>
                <div className="catalog-list">
                    <div className="arow-left">{left}</div>
                    <div className="arow-right">{right}</div>
                    {  
                        catalogs.map((cata, i) => (
                            <div key={i} className="catalog-item">
                                <div className="catalog-img" style={{backgroundImage: `url(${cata.catalogImg})`}}></div>
                                <div className="catalog-name">{cata.catalogName}</div>
                            </div>
                        ))
                    }
                </div>
        </div>

        <div className="banner-productPage" style={{backgroundImage: `url(https://www.nbcsports.com/sites/rsnunited/files/article/hero/Nike%20Air%20Jordan%201%20Lost%20and%20Found%20Shoe%20-%201.jpg)`}}></div>
        
        <div className="suggest">
            <div className="suggest-heading">Gợi ý</div>
            <div className="suggest-list">
                {
                    listProduct.map((product) => {
                        return  <div key={product.id} className="suggest-item">
                            <ProductItem product={product}/>
                        </div>
                    })
                }
                {/* <div className="suggest-item">
                    <ProductItem/>
                </div>
                <div className="suggest-item">
                    <ProductItem/>
                </div>
                <div className="suggest-item">
                    <ProductItem/>
                </div>
                <div className="suggest-item">
                    <ProductItem/>
                </div>
                <div className="suggest-item">
                    <ProductItem/>
                </div>
                <div className="suggest-item">
                    <ProductItem/>
                </div> */}
            </div>
        </div>
        
        <div className="movePage">
            <MovePage/>
        </div>
    </div>
}

export default Product;