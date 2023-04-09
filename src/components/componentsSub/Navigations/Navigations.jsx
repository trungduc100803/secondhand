import { Link } from 'react-router-dom';
import './Navigations.css'


function Navigations({title, ...props}) {
    {/* <a href='#all' className='nav-item'>Tất cẩn phẩm</a> */}

    if(props.href){
        return  <div className="navigations-item">
            <a {...props} className="nav-link">
                <span>{title}</span>
            </a>
        </div>
    }
    if(props.to){
        return <div className="navigations-item">
            <Link {...props} className="nav-link">
                <span>{title}</span>
            </Link>
        </div>
    }
}

export default Navigations;