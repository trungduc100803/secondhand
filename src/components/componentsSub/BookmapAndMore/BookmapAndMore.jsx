import './BookmapAndMore.css'

import { 
    ellipsis, bookmark,
    fb, twitter, email,
    link, flag
} from '../../../assets/icon/index'


import { useState } from 'react';
import { useCallback } from 'react';

function BookmapAndMore() {

    const [ activeMoreCard, setActiveMoreCard ] = useState('')
    const handleHiddenAndBlock = useCallback(() => {
        setActiveMoreCard('active')
    }, [activeMoreCard])

    return <div className="bookmapAndMore">
        <div className="cardBlog-head__btn cardBlog-head__save">{bookmark}</div>
        <div onClick={handleHiddenAndBlock} className="cardBlog-head__btn cardBlog-head__more">
            {ellipsis}
            <div className={`cardBlog-head__more-sub ${activeMoreCard}`}>
                <div className="cardBlog-head__more-item">
                    <div className="cardBlog-head__more-icon">{fb}</div>
                    <div className="cardBlog-head__more-text">Chia sẻ lên Facebook</div>
                </div>
                <div className="cardBlog-head__more-item">
                    <div className="cardBlog-head__more-icon">{twitter}</div>
                    <div className="cardBlog-head__more-text">Chia sẻ lên Twitter</div>
                </div>
                <div className="cardBlog-head__more-item">
                    <div className="cardBlog-head__more-icon">{email}</div>
                    <div className="cardBlog-head__more-text">Chia sẻ tới Email</div>
                </div>
                <div className="cardBlog-head__more-item">
                    <div className="cardBlog-head__more-icon">{link}</div>
                    <div className="cardBlog-head__more-text">Sao chép liên kết</div>
                </div>
                <div className="cardBlog-head__more-item">
                    <div className="cardBlog-head__more-icon">{flag}</div>
                    <div className="cardBlog-head__more-text">Báo cáo bài</div>
                </div>
            </div>
        </div>
    </div>
}

export default BookmapAndMore;