import { useEffect } from 'react';
import './Slider.css'


function Slider() {
    useEffect(() => {
        const autoSlider = () => {
            var counter = 1
            setInterval(()=> {
                document.getElementById('radio' + counter).checked = true
                counter++
                if(counter > 4){
                    counter = 1
                }
            }, 3000)
        }
        autoSlider();
    }, [])

    return <div className="slider">
        <div className="slides">
            <div className="auto-navs">
                <div className="auto-nav nav1"></div>
                <div className="auto-nav nav2"></div>
                <div className="auto-nav nav3"></div>
                <div className="auto-nav nav4"></div>
            </div>
            
            <div className="manual-nav">
                <label htmlFor="radio1" className="manual-navbtn n1"></label>
                <label htmlFor="radio2" className="manual-navbtn n2"></label>
                <label htmlFor="radio3" className="manual-navbtn n3"></label>
                <label htmlFor="radio4" className="manual-navbtn n4"></label>
            </div>

            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide s1">
                <img src="http://cdn.tgdd.vn/Files/2020/11/16/1307042/5-dia-chi-shop-do-second-hand-dep-hon-ca-hang-hieu-o-tphcm-202201051029053185.jpg" alt="" />
            </div>
            <div className="slide">
                <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/09/anhbia-second-hand-la-gi-15-shop-do-second-hand-noi-tieng-nhat.jpg" alt="" />
            </div>
            <div className="slide">
                <img src="https://www.goodnewsfinland.com/dam/jcr:287a990b-a381-456a-94b1-fe5797859e16/second-hand-clothes_2000x1125-3295406.jpeg" alt="" />
            </div>
            <div className="slide">
                <img src="https://cdn.dribbble.com/users/1577841/screenshots/14013329/media/0906b3b082f6232dece887608c7896b7.jpg?compress=1&resize=400x300&vertical=top" alt="" />
            </div>
        </div>
    </div>
}

export default Slider;