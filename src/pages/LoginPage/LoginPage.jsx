import { Link } from 'react-router-dom';
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from '../../firebase/index'
import './LoginPage.css'
import { close } from '../../assets/icon';


function Login() {
    // const handleLoginGoogle = async () => {
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
            
    // }

    return <div className="login">
        <Link to={'/'} className="close-login">{close}</Link>
        <form action="" className="login-container">
            <input type="text" name="nameUser" id="1" placeholder='Name...'/>
            <input type="password" name="password" id="2" placeholder='Password...'/>
            <input type="password" name="password" id="3" placeholder='Repeat Password...'/>
            <button className='btn-submit' type="submit">Register</button>
            <div className="login-social">
                <Link to={'/homePage'} className="google">Login with Google</Link>
                <Link to={'/homePage'} className="facebook">Login with Facebook</Link>
            </div>
        </form>
    </div>
}

export default Login;