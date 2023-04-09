import './CardBlog.css'
import BookmapAndMore from '../BookmapAndMore/BookmapAndMore';

import { Link } from 'react-router-dom';


function CardBlog({ blog }) {

    return <div className="cardBlog">
        <div className="cardBlog-container">
            <div className="cardBlog-head">
                <div className="cardBlog-head__left">
                    <div className="cardBlog-head__user">
                        <div className="cardBlog-head__user-img"  style={{backgroundImage: `url(https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg)`}}></div>
                    </div>
                    <div className="cardBlog-head__nameUser">trung duc</div>
                </div>

                <div className="cardBlog-head__right">
                    <BookmapAndMore/>
                </div>
            </div>

            <div className="cardBlog-body">
                <div className="cardBlog-body__letf">
                    <Link to={`./blogcontent/ + ${blog.id}`}>
                        <div className="cardBlog-body__title">{blog.name}</div>
                    </Link>
                    <div className="cardBlog-body__des">{blog.inner}</div>
                </div>

                <div className="cardBlog-body__right">
                    <Link to={`./blogcontent/ + ${blog.id}`}>
                        <div className="cardBlog-body__img">
                            <div style={{backgroundImage: `url(${blog.URLimage})`}}></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="cardBlog-bottom">
                <div className="cardBlog-bottom__time">{blog.time + 'giờ trước'}</div>
            </div>
        </div>
    </div>
}

export default CardBlog;