import "../Main/style.css";
function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <h2>Hội Thảo Hub</h2>
                <input placeholder="Tìm nhanh"></input>
            </div>
            <div className="header-right">
                <ul>
                    <li>Trang chủ</li>
                    <li>Danh sách</li>
                    <li>Thêm mới</li>
                    <li>Giới thiệu</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;