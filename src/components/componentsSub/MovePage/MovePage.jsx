import './MovePage.css'
import { left, right } from '../../../assets/icon/index'

function MovePage() {
    return <div className="movePage-container">
        <div className="move-btn move-left">{left}</div>
        <div className="move-numbers">
            <div className="number active number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number numberdots">...</div>
        </div>
        <div className="move-btn move-right">{right}</div>
    </div>
}

export default MovePage;