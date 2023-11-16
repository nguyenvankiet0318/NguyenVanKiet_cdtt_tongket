import { Link, useNavigate } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import sliderservices from "../../../services/SliderServices";
import { urlImage } from "../../../config";
function SliderList() {
    const navigate = useNavigate();
    const [sliders,setSlider]=useState([]);
    useEffect(function(){
        (async function(){
            await sliderservices.getAll().then(function(result){
                setSlider(result.data.sliders)
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
                        <strong className="text-primary">SLIDER</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/slider/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"30"}} className="text-center">#</th>
                            <th className="text-center">Tên</th>
                            
                            <th className="text-center">Link</th>
                            
                            <th className="text-center">Position</th>
                            <th style={{width:"130"}} className="text-center">Hình</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sliders.map(function(slider,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">{slider.name}</td>
                                <td style={{width:"120px",height:"120px"}} className="text-center">{slider.link}</td>
                               
                                <td className="text-center">{slider.position}</td>
                                 <td className="text-center">
                                 <img src={urlImage+'slider/'+slider.image} style={{width:"120px",height:"120px"}} className="img-fluid" alt="hing.png"/>
                                </td>
                                <td className="text-center">{slider.created_at}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/slider/show/"+slider.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/slider/update/"+slider.id}><FiEdit/></Link>
                                    <button onClick={()=>sliderDelete(slider.id)} className="btn btn-sm btn-danger"><FiTrash2/></button>
                                </td>
                                <td className="text-center">{slider.id}</td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default SliderList;