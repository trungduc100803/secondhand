import ProductItem from "../../components/componentsSub/ProductItem/ProductItem";


import "./HomePage.css"
import MovePage from '../../components/componentsSub/MovePage/MovePage'
import Slider from "../../components/componentsSub/Slider/Slider";
import { ref } from "../../firebase/index";
import useData from "../../hook/useData/useData";

function Home() {
    const listProduct = useData('products')

    return <div className="home">
        <div className="home-slider">
            <Slider/>
        </div>
        
        <div className="home-text">
            <div className="home-text__heading product-heading">Tại sao nên mua đố second hand?</div>
            <div className="home-text__title">Siêu tiết kiệm </div>
            <div className="home-text__para">Đồ cũ cùng đều đã có thời là đồ mới với mẫu mã đẹp đẽ và chất lượng miễn chê. Qua quá trình sử dụng, đồ mới trở thành đồ cũ và có sự sụt giảm về chất lượng. Tuy nhiên, nếu chủ trước của chúng sử dụng và giữ gìn cẩn thận thì đồ vật vẫn có thể giữ được chất lượng và giá trị rất tốt. Đồ cũ được bán với giá rẻ hơn rất nhiều so với đồ mới song vẫn giữ được nguyên vẹn giá trị sử dụng thực sự là sự lựa chọn tuyệt vời cho ví tiền eo hẹp của người tiêu dùng. Khi đã phải chi trả cho đủ thứ chi phi phí khác mà tiền làm ra có hạn thì bớt được đồng nào hay đồng đó! </div>
        </div>
        
        <div className="home-product">
            <div className="product-heading">Product</div>
            <div className="home-products-list">
                {
                    listProduct.map((product, i) => {
                        return  <div key={i} className="div-product">
                            <ProductItem product={product} />
                        </div> 
                    })
                }
                {/* <div className="div-product">
                    <ProductItem/>
                </div> */}
            </div>
        </div>
        
        <div className="movePage">
            <MovePage/>
        </div>
    </div>
}

export default Home;