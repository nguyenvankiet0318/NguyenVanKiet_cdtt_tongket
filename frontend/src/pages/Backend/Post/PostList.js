import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import postservice from "../../../services/PostServices";
import {urlImage} from "../../../config"
function PostList() {
    const [statusdel,setStatusDel]=useState(0);

    const [posts,setPost]=useState([]);
    useEffect(function(){
        (async function(){
            await postservice.getAll().then(function(result){
                setPost(result.data.post)
            })
        })();
    },[statusdel]);
    //xoa
    function postDelete(id){
        postservice.remove(id).then(function(result){
            alert(result.data.message);
            setStatusDel(result.data.id);
        });

    }
    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">POST</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/post/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"30"}} className="text-center">#</th>
                            <th style={{width:"130"}} className="text-center">Hình</th>
                            <th className="text-center">Tiêu đề</th>
                            <th className="text-center">Slug</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(function(post,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">
                                    <img style={{width:"120px",height:"120px"}} className="img-fluid" src={urlImage+'post/'+post.image} alt="hing.png"/>
                                </td>
                                <td className="text-center">{post.title}</td>
                                <td className="text-center">{post.slug}</td>
                                <td className="text-center">{post.created_at}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/post/show/"+post.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/post/update/"+post.id}><FiEdit/></Link>
                                    <button onClick={()=>postDelete(post.id)} className="btn btn-sm btn-danger"><FiTrash2/></button>
                                </td>
                                <td className="text-center">{post.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default PostList;