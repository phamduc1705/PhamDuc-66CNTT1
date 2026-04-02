import "./style.css"
import { useState } from "react";
function Main() {
    const [list, setList] = useState([]);
    const [isAddOpen, setIsAddOpen] = useState(false);
    return (
        <>
            <div className="main">
            <div className="main_title">
                <h2>Bảng điều khiển hội thảo</h2>
                <p>Theo dõi lịch,diễn gia và các điểm sự kiện</p>
            </div>
            <div className="main_action">
                <input placeholder="Gõ để lọc bảng" className="search"></input>
                <select className="select">
                    <option>Tất cả</option>
                </select>
                <button className="add">Thêm mới</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Tên hội thảo</th>
                        <th>Diễn giả</th>
                        <th>Email</th>
                        <th>Ngày tổ chức</th>
                        <th>Địa điểm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hội thảo AI cho ứng dụng giáo dục</td>
                        <td>Trần minh tuấn</td>
                        <td>Email@gmail.com</td>
                        <td>2026-04-12</td>
                        <td>GIảng đường</td>
                    </tr>
                    <tr>
                        <td>Hội thảo AI cho ứng dụng giáo dục</td>
                        <td>Trần minh tuấn</td>
                        <td>Email@gmail.com</td>
                        <td>2026-04-12</td>
                        <td>GIảng đường</td>
                    </tr>
                    <tr>
                        <td>Hội thảo AI cho ứng dụng giáo dục</td>
                        <td>Trần minh tuấn</td>
                        <td>Email@gmail.com</td>
                        <td>2026-04-12</td>
                        <td>GIảng đường</td>
                    </tr>
                    <tr>
                        <td>Hội thảo AI cho ứng dụng giáo dục</td>
                        <td>Trần minh tuấn</td>
                        <td>Email@gmail.com</td>
                        <td>2026-04-12</td>
                        <td>GIảng đường</td>
                    </tr>
                    <tr>
                        <td>Hội thảo AI cho ứng dụng giáo dục</td>
                        <td>Trần minh tuấn</td>
                        <td>Email@gmail.com</td>
                        <td>2026-04-12</td>
                        <td>GIảng đường</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}
export default Main;