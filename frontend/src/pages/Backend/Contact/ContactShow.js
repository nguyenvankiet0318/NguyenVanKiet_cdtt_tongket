import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";
import contactservices from "../../../services/ContactServices";

function ContactShow() {
    const navigate = useNavigate(); // chuyen trang

    const {id} = useParams("id")
    const [contact,setContact]=useState([]);
    useEffect(function(){
        (async function(){
            await contactservices.getById(id).then(function(result){
                setContact(result.data.contact)
            })
        })();
    },[])

    function contactDelete(id){
        contactservices.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/contact',{replace:true});
        })
    }

    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT LIÊN HỆ</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/" + contact.id}><FiEdit />Sửa</Link>
                        <button onClick={()=>contactDelete(contact.id)} className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/contact" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
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
                            <td>{contact.id}</td>
                        </tr>
                        <tr>
                            <th>User Id</th>
                            <td>{contact.user_id}</td>
                        </tr>
                        <tr>
                            <th>Tên</th>
                            <td>{contact.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{contact.email}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{contact.phone}</td>
                        </tr>                        
                        <tr>
                            <th>Tiêu đề</th>
                            <td>{contact.title}</td>
                        </tr>
                        <tr>
                            <th>Nội dung</th>
                            <td>{contact.content}</td>
                        </tr>
                        <tr>
                            <th>Replay Id</th>
                            <td>{contact.replay_id}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{contact.status}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{contact.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ContactShow;