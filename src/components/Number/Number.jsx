import { useState, useEffect } from 'react';


import "./Number.css"

function Number() {
    
    const [ number, setNumber ] = useState(0)

    const handleDecrease = () => {
        number > 0 ? setNumber(number - 1) : setNumber(0)
    }
    const handleIncrease = () => {
        setNumber(number + 1)
    }

    return <div className="number">
        <div onClick={handleDecrease} className="qualtity-decrease">-</div>
        <div className="qualtity-number">{number}</div>
        <div onClick={handleIncrease} className="qualtity-increase">+</div>
    </div>
}

export default Number;