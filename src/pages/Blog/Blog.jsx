import './Blog.css'
import { pens } from '../../assets/icon';
import CardBlog from '../../components/componentsSub/CardBlog/CardBlog'
import useData from '../../hook/useData/useData'

import { Link } from 'react-router-dom';



function Blog() {

    const blogs = useData('blogs')
    return <div className="blog">
        <div className="blog-head">
            <div className="blog-head__left">
                <div className="blog-heading">Bài viết nổi bật</div>
                <div className="blog-des">Tổng hợp các bài viết chia sẻ về kinh nghiệm mua bán và sử dụng đồ 2hand</div>
            </div>
            <Link to={'/createBlog'} className="blog-head__right">
                <div className="blog-head__right-text">Viết blog</div>
                <div className="blog-head__right-btn">{pens}</div>
            </Link>
        </div>

        <div className="blog-list">
            {
                blogs.map((blog, i) =>  {
                    return <CardBlog blog={blog}  key={i}/>
                })
            }
            
        </div>
    </div>
}

export default Blog;