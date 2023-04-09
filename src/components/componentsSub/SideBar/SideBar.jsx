import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

function SideBar() {

    const handleClickSideBar = useCallback((e) => {
        const allSideBar = document.querySelectorAll('.sideBar-item')
        const sideBar = e.target
        for(let i = 0; i < allSideBar.length; i++){
            if(allSideBar[i].classList.value == 'sideBar-item active' || allSideBar[i].childNodes[1].classList.value == 'active'){
                allSideBar[i].classList.remove('active')
                allSideBar[i].childNodes[1].classList.remove('active')
            }
        }
        sideBar.classList.add('active')
    }, [])

    return <div className="sidebar">
        <div className="userInfor-bar">
            <div className="sideBar-head">
                <div className="sideBar-head__img">
                    <div style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKFOjwTMSjUqg05dLnXGxDiL3RZcdj8XEFw&usqp=CAU)`}}></div>
                </div>
                <div className="sideBar-head__name">trung duc</div>
            </div>
            <div className="sideBar-list">
                <Link to={'/infoUserPage'} className="sideBar-link">
                    <div onClick={handleClickSideBar} className="sideBar-item active">
                        <div className="sideBar-item__icon">
                            <div style={{backgroundImage: `url(https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4)`}}></div>
                        </div>
                        <span>Tài khoản của tôi</span>
                    </div>
                </Link>
                <Link to={'/purchase'} className="sideBar-link">
                    <div onClick={handleClickSideBar}  className="sideBar-item">
                        <div className="sideBar-item__icon">
                            <div style={{backgroundImage: `url(	https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078)`}}></div>
                        </div>
                        <span>Đơn mua</span>
                    </div>
                </Link>
                <Link to={'/notifications'} className="sideBar-link">
                    <div onClick={handleClickSideBar}  className="sideBar-item">
                        <div className="sideBar-item__icon">
                            <div style={{backgroundImage: `url(	https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c)`}}></div>
                        </div>
                        <span>Thông báo</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
}

export default SideBar;