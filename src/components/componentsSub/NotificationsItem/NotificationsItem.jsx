import './NotificationsItem.css'



function NotificationsItem() {
    return <div className="NotificationsItem">
        <div className="notificationsItem-img">
            <div style={{backgroundImage: `url(https://cf.shopee.vn/file/a540fc75d1a74ae320137203e62df238_tn)`}}></div>
        </div>
        <div className="notificationsItem-content">
            <div className="notificationsItem-text">fhnsjdkfnklewjifwejidjkffewmdclkncdknjksnkcjdjc</div>
            <div className="notificationsItem-time">
                <div className="notificationsItem-time__hours">12:03</div>
                <div className="notificationsItem-time__day">23-12-2022</div>
            </div>
        </div>
    </div>
}

export default NotificationsItem;