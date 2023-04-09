import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';



import './IntroPage.css'
import Button from '../../components/componentsSub/Button/Button';


function Intro() {

    const history = useNavigate()
    const handleNextPage = useCallback(() => {
        history('/loginPage')
    }, [])

    return <div className="intro">
        <img src="https://dosinguyenkien.com/wp-content/uploads/2019/01/2hand-la-gi-2.jpg" alt="" />
        <div className="intro-content">
            <div className="container">
                <Button onClick={handleNextPage} text={'Next to login'}/>
            </div>
        </div>
    </div>
}

export default Intro;