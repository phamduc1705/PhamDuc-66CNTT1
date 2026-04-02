import "../Main/style.css";
function Popup(){
    return(
        <>
        <div className="popup">
            <h2 className="title">
                Thêm hội thảo mới
            </h2>
            <form action="" className="form">
                <div className="box">
                    <input className="name" type="text" placeholder="Nhập tên sự kiện" maxlength="60"></input>
                    <span className="name-error"></span>
                </div>
                <div className="box">
                    <input className="name1" type="text" placeholder="Họ tên diễn giả"></input>
                    <span className="name1-error"></span>
                </div>
                <div className="box">
                    <input className="email" type="email" placeholder="email@example.com"></input>
                    <span className="email-error"></span>
                </div>
                <div className="box">
                    <input className="date" type="date" ></input>
                    <span className="date-error"></span>
                </div>
                <div className="box">
                    <input className="address" type="text" placeholder="Hội trường/địa chỉ"></input>
                    <span className="address-error"></span>
                </div>
                
                <div className="actions">
                    <button className="cancel" type="button">Cancel</button>
                    <button className="success" type="button">Xác nhận</button>
                </div>
            </form>
        </div>
        <div className="overlay"></div>
        </>
    )
}