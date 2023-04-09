
import './DefaultLayout.css'
import Header from '../componentsSub/Header/Header';
import Footer from '../componentsSub/Footer/Footer';


function DefaultLayout({children}) {
    return <div className="defaultLayout">
        <Header/>
        <div className="children">{children}</div>
        <Footer/>
    </div>
}

export default DefaultLayout;