import IntroPage from '../pages/IntroPage/IntroPage'
import HomePage from '../pages/HomePage/HomePage'
import ProductPage from '../pages/ProductPage/ProductPage'
import Blog from '../pages/Blog/Blog'
import LoginPage from '../pages/LoginPage/LoginPage'
import InfoUserPage from '../pages/InfoUserPage/InfoUserPage'
import CartPage from '../pages/CartPage/CartPage'
import CheckPage from '../pages/CheckPage/CheckPage'
import ShopPage from '../pages/ShopPage/ShopPage'
import CreateBlog from '../pages/CreateBlog/CreateBlog'
import Purchase from '../pages/Purchase/Purchase'
import Notifications from '../pages/Notifications/Notifications'
import AllPage from '../pages/AllPage/AllPage'
import ExpressPage from '../pages/ExpressPage/ExpressPage'
import ExpressingPage from '../pages/ExpressingPage/ExpressingPage'
import DonePage from '../pages/DonePage/DonePage'
import FailPage from '../pages/FailPage/FailPage'
import MoneyBackPage from '../pages/MoneyBackPage/MoneyBackPage'
import BlogContent from '../pages/BlogContent/BlogContent'


import Product from '../components/Product/Product'

const routes = [
    {path: '/', component: IntroPage, diffirentLayout: true},
    {path: '/homePage', component: HomePage},
    {path: '/productPage', component: ProductPage},
    {path: '/createBlog', component: CreateBlog},
    {path: '/blog', component: Blog},
    {path: '/blog/blogcontent/:id', component: BlogContent},
    {path: '/loginPage', component: LoginPage, diffirentLayout: true},
    {path: '/infoUserPage', component: InfoUserPage, sideBarLayout: true},
    {path: '/purchase', component: Purchase, sideBarLayout: true},
    {path: '/purchase/all', component: AllPage, justChilLayout: true},
    {path: '/purchase/express', component: ExpressPage, justChilLayout: true},
    {path: '/purchase/expressing', component: ExpressingPage, justChilLayout: true},
    {path: '/purchase/done', component: DonePage, justChilLayout: true},
    {path: '/purchase/fail', component: FailPage, justChilLayout: true},
    {path: '/purchase/moneyback', component: MoneyBackPage, justChilLayout: true},
    {path: '/notifications', component: Notifications, sideBarLayout: true},
    {path: '/cartPage', component: CartPage, diffirentLayout: true},
    {path: '/product/:id', component: Product, diffirentLayout: true},
    {path: '/checkPage/:id', component: CheckPage, diffirentLayout: true},
    {path: '/shop', component: ShopPage, diffirentLayout: true},
]

export default routes