import './SideBarLayout.css'
import Header from '../componentsSub/Header/Header'
import Footer from '../componentsSub/Footer/Footer'



function SideBarLayout({children, sideBar}) {
    return <div className="sideBarLayout">
        <Header/>
        <div className="SideBarLayout-container">
            <div className="sidebars">{sideBar}</div>
            <div className="SideBarLayout-body">{children}</div>
        </div>
        <Footer/>
    </div>
}

export default SideBarLayout;