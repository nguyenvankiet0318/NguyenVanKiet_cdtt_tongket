import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import sliderservices from "../../../services/SliderServices";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";
import { urlImage } from "../../../config";


function SliderShow() {
    const navigate = useNavigate();
    const {id}=useParams("id");
    const [slider,setSlider]=useState([]);
    useEffect(function(){
        (async function(){
            await sliderservices.getById(id).then(function(result){
                setSlider(result.data.slider);
            })
        })();
    },[]);
    function sliderDelete(id){
        sliderservices.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/slider',{replace:true});
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SLIDER</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/" + slider.id}><FiEdit />Sửa</Link>
                        <button onClick={()=>sliderDelete(slider.id)} className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/slider" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
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
                            <td>{slider.id}</td>
                        </tr>
                        <tr>
                            <th>Tên slider</th>
                            <td>{slider.name}</td>
                        </tr>
                        <tr>
                            <th>Hình</th>
                            <img src={urlImage + 'slider/' + slider.image} alt="hình" className="img-fluid" style={{ maxWidth: 200 }} />
                        </tr>
                        <tr>
                            <th>Link</th>
                            <td>{slider.link}</td>
                        </tr>
                        
                        <tr>
                            <th>Sắp xếp</th>
                            <td>{slider.sort_order}</td>
                        </tr>
                        <tr>
                            <th>Vị trí</th>
                            <td>{slider.position}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{slider.status}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{slider.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default SliderShow;