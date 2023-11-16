import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservices from "../../../services/UserServices";
import orderservices from "../../../services/OrderServices";
import { FiRotateCcw} from "react-icons/fi";


function OrderCreate() {
    const navigate = useNavigate(); // chuyen trang

    const [users, setUser] = useState([]);
    useEffect(function () {
        (async function () {
            await userservices.getAll().then(function (result) {
                setUser(result.data.users)
            })
        })();
    }, []);

    const [user_id, setUserId] = useState(1);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState(1);
    
    async function orderStore(event) {
        event.preventDefault();                                                         
        var order = new FormData();
        order.append("user_id", user_id);
        order.append("name", name);
        order.append("phone", phone);
        order.append("email", email);
        order.append("address", address);
        order.append("note", note);
        order.append("status", status);

        await orderservices.create(order).then(function (res) {
            alert(res.data.message);
            navigate('/admin/order', { replace: true });
        })
    }

    return (
        <form onSubmit={orderStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm đơn hàng
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/order" className="btn btn-sm btn-info"><FiRotateCcw/>Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="md-3">
                                <label htmlFor="user_id">User Id</label>
                                <select onChange={(e) => setUserId(e.target.value)} value={user_id} name="user_id" className="form-control">
                                    {/* <option value="0">None</option> */}
                                    {users.map(function (us, index) {
                                        return (
                                            <option key={index} value={us.id}>{us.name}</option>
                                        )
                                    })}
                                </select>

                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Tên</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={phone} className="form-control"></input>
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control"></input>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="md-3">
                                <label htmlFor="address">Địa chỉ</label>
                                <textarea onChange={(e) => setAddress(e.target.value)} name="address" value={address} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="note">Ghi chú</label>
                                <textarea onChange={(e) => setNote(e.target.value)} name="note" value={note} className="form-control"></textarea>
                            </div>
                            <div className="md-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-control">
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    );
}

export default OrderCreate;