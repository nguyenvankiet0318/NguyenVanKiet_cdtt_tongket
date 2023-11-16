import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import userservices from "../../../services/UserServices";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";
import { urlImage } from "../../../config";


function UserShow() {
    const {id}=useParams("id");
    const [user,setUser]=useState([]);
    useEffect(function(){
        (async function(){
            await userservices.getById(id).then(function(result){
                setUser(result.data.user);
            })
        })();
    },[]);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT TÀI KHOẢN</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/user/update/" + user.id}><FiEdit />Sửa</Link>
                        <button className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/user" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-border ">
                    <thead>
                        <tr>
                            <th style={{ width: 200 }}>Tên trường</th>
                            <th>Giá trị</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th>Tên</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th>Tên tài khoản</th>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>{user.password}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <td>
                                <img src={urlImage + 'user/' + user.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                            </td>
                        </tr>
                        <tr>
                            <th>Roles</th>
                            <td>{user.roles}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{user.status}</td>
                        </tr>
                    
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{user.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default UserShow;