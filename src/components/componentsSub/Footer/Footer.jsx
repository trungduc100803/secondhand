import { Link } from 'react-router-dom';

import './Footer.css'
import Logo from '../../../assets/logo/Logo';


const footerList = [
    {
        title: 'About Us',
        path: '/about'
    },
    {
        title: 'Privacy',
        path: '/privacy'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
]

function Footer() {
    return <div className="footer">
        <div className="footer-left">
            <Logo/>
            <h1 className="footer-heading">Tại sao nên sử dụng đồ 2Hand?</h1>
            <p>
                Sử dụng đồ 2Hand giúp tiết kiệm tài chính, ảnh hưởng tích cực đến môi trường sống. Hãy cố gắng tái sử dụng đồ dùng có thể nhé!
            </p>
        </div>
        <div className="footer-right">
            <div className="footer-list">
                {
                    footerList.map((item, i) => (
                        <li key={i} className="footer-item">
                            <Link to={item.path} >{item.title}</Link>
                        </li>
                    ))
                }
            </div>
            <div className="footer-list">
                {
                    footerList.map((item, i) => (
                        <li key={i} className="footer-item">
                            <Link to={item.path} >{item.title}</Link>
                        </li>
                    ))
                }
            </div>
            <div className="footer-list">
                {
                    footerList.map((item, i) => (
                        <li key={i} className="footer-item">
                            <Link to={item.path} >{item.title}</Link>
                        </li>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Footer;