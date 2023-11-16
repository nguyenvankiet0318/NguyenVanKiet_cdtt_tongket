import { Link, useNavigate } from "react-router-dom";
import userservices from "../../../services/UserServices";
import { useState } from "react";
import { FiRotateCcw} from "react-icons/fi";


function UserCreate() {
    const navigate = useNavigate(); // chuyen trang


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassworda] = useState('');
    const [roles, setRoles] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState(1);
    async function userStore(event){
        event.preventDefault();
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name",name);
        user.append("email",email);
        user.append("phone",phone);
        user.append("username",username);
        user.append("password", password);
        user.append("roles", roles);
        user.append("address", address);
        user.append("status",status);
        user.append("image",image.files[0]);
 
        await userservices.create(user).then(function(res){
            alert(res.data.message);
            navigate('/admin/user',{replace:true});
        })
    }

    return (
        <form onSubmit={userStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm tài khoản
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit"className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/user" className="btn btn-sm btn-info"><FiRotateCcw/>Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                <label htmlFor="name">Tên</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="phone">Số điện thoại</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={phone} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="username">Tên tài khoản</label>
                                <input onChange={(e) => setUserName(e.target.value)} type="text" name="username" value={username} className="form-control" />
                            </div> 
                            <div className="md-3">
                                <label htmlFor="password">Password</label>
                                <input onChange={(e) => setPassworda(e.target.value)} type="password" name="password" value={password} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="password">Địa chỉ</label>
                                <input onChange={(e) => setAddress(e.target.value)} type="text" name="address" value={address} className="form-control" />
                            </div>

                        </div>
                        <div className="col-md-3">
                        <div className="md-3">
                                <label htmlFor="password">Role</label>
                                <input onChange={(e) => setRoles(e.target.value)} type="text" name="roles" value={roles} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
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

export default UserCreate;