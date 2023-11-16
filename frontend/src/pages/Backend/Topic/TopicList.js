import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import topicservices from "../../../services/TopicServices";
function TopicList() {
    const [statusdel, setStatusDelete]=useState(0);
    const [topics,setTopic]=useState([]);
    useEffect(function(){
        (async function(){
            await topicservices.getAll().then(function(result){
                setTopic(result.data.topics)
            })
        })();
    },[statusdel]);
    function topicDelete(id)
    {
        topicservices.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">TOPIC</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/topic/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                        <th style={{width:"30"}} className="text-center">#</th>
                            <th style={{width:"100"}} className="text-center">Tên</th>
                            <th className="text-center">Parent_id</th>
                            <th className="text-center">Slug</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"30"}} className="text-center">Status</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(function(topic,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td style={{width:"30"}} className="text-center">{topic.name}</td>
                                <td className="text-center">{topic.parent_id}</td>
                                <td className="text-center">{topic.slug}</td>
                                <td className="text-center">27/05/2023</td>
                                <td className="text-center">{topic.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/topic/show/"+topic.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/topic/update/"+topic.id}><FiEdit/></Link>
                                    <button onClick={()=>topicDelete(topic.id)} className="btn btn-sm btn-danger "><FiTrash2/></button>
                                </td>
                                <td className="text-center">{topic.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default TopicList;
