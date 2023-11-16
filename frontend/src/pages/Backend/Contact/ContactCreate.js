import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import contactservices from "../../../services/ContactServices";
import { FiRotateCcw} from "react-icons/fi";

function ContactCreate() {

    const navigate = useNavigate(); // chuyen trang
    
    // const [contacts,setContact] = useState([]);
    // useEffect(function(){
    //     (async function(){
    //         await contactservices.getAll().then(function(result){
    //             setContact(result.data.contacts)
    //         })
    //     })();
    // },[])

    const [user_id, setUserId] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [replay_id, setReplayId] = useState();
    const [status, setStatus] = useState(1);

    async function contactStore(event) {
        event.preventDefault();
        var contact = new FormData();
        contact.append("user_id", user_id);
        contact.append("name", name);
        contact.append("email", email);
        contact.append("phone", phone);
        contact.append("title", title);
        contact.append("content", content);
        contact.append("replay_id", replay_id);
        contact.append("status", status);

        await contactservices.create(contact).then(function (res) {
            alert(res.data.message);
            navigate('/admin/contact', { replace: true });
        })
    }

    return (
        <form onSubmit={contactStore}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">
                                Thêm Contact
                            </strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info"><FiRotateCcw/>Quay lại</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">

                            <div className="md-3">
                                <label htmlFor="user_id">User Id</label>
                                <input onChange={(e) => setUserId(e.target.value)} type="text" name="user_id" value={user_id} className="form-control" />
                            </div>
                            <div className="md-3">
                                <label htmlFor="name">Tên</label>
                                <input onChange={(e) => setName(e.target.value)} type="text" name="name" value={name} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="email">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="phone">Phone</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="text" name="phone" value={phone} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="title">Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" value={title} className="form-control" />
                            </div>

                            <div className="md-3">
                                <label htmlFor="content">Nội dung</label>
                                <textarea onChange={(e) => setContent(e.target.value)} name="content" value={content} className="form-control"></textarea>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="md-3">
                                <label htmlFor="replay_id">Replay_id</label>
                                <select onChange={(e) => setReplayId(e.target.value)} value={replay_id} name="replay_id" className="form-control">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                                {/* <select onChange={(e) => setParentId(e.target.value)} value={parent_id} name="parent_id" className="form-control">
                                    <option value="0">Danh mục cha</option>
                                    {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        )
                                    })}
                                </select> */}
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

export default ContactCreate;