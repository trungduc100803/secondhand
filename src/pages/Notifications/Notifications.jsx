import './Notifications.css'
import NotificationsItem from '../../components/componentsSub/NotificationsItem/NotificationsItem';


function Notifications() {
    return <div className="Notifications">
        <div className="Notifications-container">
            <div className="notifications-heading">Đánh dấu Đã đọc tất cả</div>
            <div className="notifications-list">
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
                <NotificationsItem/>
            </div>
        </div>
    </div>
}

export default Notifications;