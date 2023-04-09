import './InfoUserPage.css'
import { down } from '../../assets/icon/index'


import { useCallback, useState } from 'react' 

function InfoUser() {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const months = ['tháng 1','tháng 2','tháng 3','tháng 4','tháng 5','tháng 6','tháng 7','tháng 8','tháng 9','tháng 10','tháng 11','tháng 12', ]
    const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2010]
    const [ day, setDay ] = useState('10')
    const [ month, setMonth ] = useState('thang 8')
    const [ year, setyear ] = useState('2003')
    const [ avatar, setAvatar ] = useState('data:image/jpeg;base64,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')

    const handleDay = useCallback((e) => {
        setDay(e.target.textContent)
    }, [day])
    const handleMonth = useCallback((e) => {
        setMonth(e.target.textContent)
    }, [month])
    const handleYear = useCallback((e) => {
        setyear(e.target.textContent)
    }, [year])



    const handleHiddenAndDisplayTime = useCallback((e) => {
        const timeSub = e.target
        const listTimeInfo = document.querySelectorAll('.infoUser-content__time-sub')
        for(let i = 0; i < listTimeInfo.length; i++){
            if(listTimeInfo[i].classList.value == 'infoUser-content__time-sub active'){
                listTimeInfo[i].classList.remove('active')
            }
        }
        timeSub.children[2].classList.add('active')
    }, [])

    const handleCheckSex = useCallback((e) => {
        const checkSex = e.target
        const listCheckSex = document.querySelectorAll('.infoUser-content__item-box')
        for(let i = 0; i < listCheckSex.length; i++){
            if(listCheckSex[i].classList.value == 'infoUser-content__item-box active'){
                listCheckSex[i].classList.remove('active')
            }
        }
        checkSex.classList.add('active')
    }, [])

    const  handleUpdateAvatar = useCallback((e) => {
        const file = e.target.files[0]
        const  reader  = new FileReader();
        console.log(reader)
        // setAvatar(reader.readAsDataURL(file))
    }, )

    return <div className="infoUser">
        <div className="infoUser-container">
            <div className="infoUser-head">
                <div className="infoUser-heading">HỒ SƠ CỦA TÔI</div>
                <div className="infoUser-des">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
            </div>
            <div className="infoUser-body">
                <div className="infoUser-left">
                    <div className="infoUser-list">
                        <div className="infoUser-item">
                            <div className="infoUser-label">Tên đăng nhập</div>
                            <div className="infoUser-content">trung duc</div>
                        </div>
                        <div className="infoUser-item">
                            <div className="infoUser-label">Email</div>
                            <div className="infoUser-content">
                                <div className="infoUser-content__text">du******@gmail.com</div>

                            </div>
                        </div>
                        <div className="infoUser-item">
                            <div className="infoUser-label">Số điện thoại</div>
                            <div className="infoUser-content">
                                <div className="infoUser-content__text">*********31</div>

                            </div>
                        </div>
                        <div className="infoUser-item">
                            <div className="infoUser-label">Giới tính</div>
                            <div className="infoUser-content">
                                <div className="infoUser-content__item">
                                    <div onClick={handleCheckSex} className="infoUser-content__item-box"></div>
                                    <div className="infoUser-content__item-text">Nam</div>
                                </div>
                                <div className="infoUser-content__item">
                                    <div onClick={handleCheckSex} className="infoUser-content__item-box"></div>
                                    <div className="infoUser-content__item-text">Nữ</div>
                                </div>
                                <div className="infoUser-content__item">
                                    <div onClick={handleCheckSex} className="infoUser-content__item-box"></div>
                                    <div className="infoUser-content__item-text">Khác</div>
                                </div>
                            </div>
                        </div>

                        <div className="infoUser-item">
                            <div className="infoUser-label">Ngày sinh</div>
                            <div className="infoUser-content">
                                <div onClick={handleHiddenAndDisplayTime} className="infoUser-content__time">
                                    <div className="infoUser-content__item-time">{day}</div>
                                    <div className="infoUser-content__item-icon">{down}</div>
                                    <div className={`infoUser-content__time-sub`}>
                                        {
                                            days.map((day, i) => <div onClick={handleDay} key={i} className="infoUser-content__time-sub-item">{day}</div>)
                                        }
                                    </div>
                                </div>
                                <div onClick={handleHiddenAndDisplayTime}  className="infoUser-content__time">
                                    <div className="infoUser-content__item-time">{month}</div>
                                    <div className="infoUser-content__item-icon">{down}</div>
                                    <div className={`infoUser-content__time-sub`}>
                                        {
                                            months.map((month, i) => <div onClick={handleMonth}  key={i} className="infoUser-content__time-sub-item">{month}</div>)
                                        }
                                    </div>
                                </div>
                                <div onClick={handleHiddenAndDisplayTime}  className="infoUser-content__time">
                                    <div className="infoUser-content__item-time">{year}</div>
                                    <div className="infoUser-content__item-icon">{down}</div>
                                    <div className={`infoUser-content__time-sub`}>
                                        {
                                            years.map((year, i) => <div onClick={handleYear}  key={i} className="infoUser-content__time-sub-item">{year}</div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoUser-right">
                    <div className="infoUser-avatar">
                        <div className="infoUser-img">
                            <div style={{backgroundImage: `url(${avatar})`}}></div>
                        </div>
                        <div className="avatar-btn">
                            <label htmlFor="updateFile">Chọn ảnh</label>
                            <input onChange={handleUpdateAvatar} className='avatar-file' type="file" name="" id="updateFile" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="infoUser-btn">Lưu</div>
        </div>
    </div>
}

export default InfoUser;