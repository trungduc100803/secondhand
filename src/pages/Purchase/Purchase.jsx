import './Purchase.css'
import Navigations from '../../components/componentsSub/Navigations/Navigations';
import AllPage from '../AllPage/AllPage'
import ExpressPage from '../ExpressPage/ExpressPage';
import ExpressingPage from '../ExpressingPage/ExpressingPage';
import DonePage from '../DonePage/DonePage';
import MoneyBackPage from '../MoneyBackPage/MoneyBackPage'
import FailPage from'../FailPage/FailPage'

const purchaseNavi =[
    {
        title: 'Tất cả',
        to: './all'
    },
    {
        title: 'Vận chuyển',
        to: './express'
    },
    {
        title: 'Đang giao',
        to: './expressing'
    },
    {
        title: 'Hoàn thành',
        to: './done'
    },
    {
        title: 'Đã huy',
        to: './fail'
    },
    {
        title: 'Trả hàng/ Hoàn tiền',
        to: './moneyback'
    },
]

function Purchase() {
    let Component = AllPage
    const handleClickNavi = (to) => {
        if(window.location.href + to == 'http://localhost:3000/purchase/express'){
            return Component = ExpressPage
        }
        if(window.location.href + to == 'http://localhost:3000/purchase/expressing'){
            return Component = ExpressingPage
        }
        if(window.location.href + to == 'http://localhost:3000/purchase/done'){
            return Component = DonePage
        }
        if(window.location.href + to == 'http://localhost:3000/purchase/fail'){
            return Component = FailPage
        }
        if(window.location.href + to == 'http://localhost:3000/purchase/moneyback'){
            return Component = MoneyBackPage
        }
        console.log(window.location.href + to)
    }
    
    return <div className="Purchase">
        <div className="Purchase-container">
            <div className="purchase-navi">
                {
                    purchaseNavi.map((navi, i) => <Navigations 
                        key={i} 
                        title={navi.title} 
                        to={navi.to} 
                        onClick={() => handleClickNavi(navi.to)}
                    />)
                }
            </div>
            <div>
                <Component/>
            </div>
        </div>
    </div>
}

export default Purchase;