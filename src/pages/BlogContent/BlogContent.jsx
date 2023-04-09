import './BlogContent.css'
import BookmapAndMore from '../../components/componentsSub/BookmapAndMore/BookmapAndMore'
import useLoad from '../../hook/useLoad/useLoad';
import useData from '../../hook/useData/useData';


function BlogContent() {
    const listBlog = useData('blogs')
    const blogs = useLoad(listBlog, 'blog/blogcontent')
    return <div className="BlogContent">
        <div className="blogContent-container">
            <div className="blogContent-title">{blogs.name}</div>
            <div className="blogContent-user">
                <div className="blogContent-user__left">
                    <div className="blogContent-user__img">
                        <div style={{backgroundImage: `url(${blogs.URLimage})`}}></div>
                    </div>
                    <div className="blogContent-user__info">
                        <div className="blogContent-user__name">trung duc</div>
                        <div className="blogContent-user__time">{blogs.time}</div>
                    </div>
                </div>
                <div className="blogContent-user__right">
                    <BookmapAndMore/>
                </div>
            </div>
            <div className="blogContent-content">{blogs.inner}</div>
        </div>
    </div>
}

export default BlogContent;