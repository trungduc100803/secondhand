import { Link } from "react-router-dom";

import './Logo.css'

function Logo() {
    return <Link to={'/homePage'} className="logo">2Hand</Link>
}

export default Logo;