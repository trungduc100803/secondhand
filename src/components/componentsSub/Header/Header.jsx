import { Link } from 'react-router-dom';


import './Header.css'
import Logo from '../../../assets/logo/Logo';
import user, { cart, menu } from '../../../assets/icon/index'
import { useCallback } from 'react';

const naviList = [
    {
        title: 'Trang chủ',
        path: '/homePage',
    },
    {
        title: 'Sản phẩm',
        path: '/productPage',
    },
    {
        title: 'Blog',
        path: '/blog',
    }
]
function Header() {


    const handleClickMenu = useCallback((e) => {
        const naviList = document.querySelector('.navi-container')
        naviList.classList.add('active')
        console.dir(naviList)
    }, [])

    return <div className="header">
        <Logo/>
        <div className="navi-mobile">
            <div className="navi-icon" onClick={handleClickMenu}>{menu}</div>
            <div className="navi-container">
                <div className="navi-list">
                    <div className="navi-logo">
                    </div>
                    {naviList.map((nav, i) => (
                        <Link to={nav.path}>
                            <li key={i} className="naviMobile-item">
                                <p>{nav.title}</p>
                            </li>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        <div className="navi">
            {naviList.map((nav, i) => (
                <li key={i} className="navi-item">
                    <Link to={nav.path}>{nav.title}</Link>
                </li>
            ))}
        </div>
        <div className="btn-header">
            <div className="btn-cart">
                <Link to={'/cartPage'}>{cart}</Link>
            </div>
            <div className="btn-user">
                <Link to={'/infoUserPage'}>{user}</Link>
            </div>
        </div>
        
    </div>
}

export default Header;