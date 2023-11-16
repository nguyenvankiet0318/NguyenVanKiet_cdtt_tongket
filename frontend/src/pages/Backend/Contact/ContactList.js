import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import contactservices from "../../../services/ContactServices";
function ContactList() {
    const [statusdel,setStatusDel]=useState(0);

    const [contacts,setContact] = useState([]);
    useEffect(function(){
        (async function(){
            await contactservices.getAll().then(function(result){
                setContact(result.data.contacts)
            })
        })();
    },[statusdel])

    // xoa
    function contactDelete(id){
        contactservices.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        })
        
    }


    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CONTACT</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/contact/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"20"}} className="text-center">#</th>
                            <th style={{width:"50"}} className="text-center">Tên</th>
                            <th style={{width:"100"}} className="text-center">Email</th>
                            <th className="text-center">Số điện thoại</th>
                            <th className="text-center">Tiêu đề</th>
                            <th className="text-center">Nội dung</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"30"}} className="text-center">Status</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(function(contact,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td style={{width:"30"}} className="text-center">{contact.name}</td>
                                <td className="text-center">{contact.email}</td>
                                <td className="text-center">{contact.phone}</td>
                                <td className="text-center">{contact.title}</td>
                                <td className="text-center">{contact.content}</td>
                                <td className="text-center">27/05/2023</td>
                                <td className="text-center">{contact.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/contact/show/"+contact.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+contact.id}><FiEdit/></Link>
                                    <button onClick={()=>contactDelete(contact.id)} className="btn btn-sm btn-danger"><FiTrash2/></button>
                                </td>
                                <td className="text-center">{contact.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default ContactList;
