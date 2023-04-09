import { useContext } from 'react';


import './Model.css'
import { AppContext } from '../../Context/AppContext';
import { close } from '../../assets/icon';


function Model({children}) {
    const  { activeModel, setActiveModel } = useContext(AppContext)
    const handleCloseModel = () => {
        setActiveModel('')
    }

    return <div className={`model ${activeModel}`}>
        <div onClick={handleCloseModel} className="close-model">{close}</div>
        <div className="model-chil">{children}</div>
    </div>
}

export default Model;