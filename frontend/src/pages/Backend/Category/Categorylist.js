import { Link } from "react-router-dom";
import { FaPlus, FaTrash } from 'react-icons/fa';
import { FaEye,FaEdit } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
import categorysevice from "../../../services/CategoryServices";
function Categorylist() {
    const [statusdel, setStatusDelete]=useState(0);

   const [categorys,setCategorys]= useState([]);
   useEffect(function(){
        (async function(){
            await categorysevice.getAll().then(function(result){
                setCategorys(result.data.data); 
            });     
        })();
   },[])
   function categoryDelete(id)
   {
    categorysevice.remove(id).then(function (result) {
           alert(result.data.message);
           setStatusDelete(result.data.id);
       });
   }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-danger" to ="/admin/category/create">
                             <FaPlus/>   Thêm</Link>
                        </div> 
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th style={{ width:30 }} className="text-center">#</th>
                                <th style={{ width: 30 }} className="text-center">Id</th>
                                <th style={{ width: 100 }} className="text-center">Parent_id</th>
                                <th style={{ width: 400 }} className="text-center">Hình</th>
                                <th>Tên danh mục</th>
                                <th>Slug</th>
                                <th style={{ width: 130 }} className="text-center">Ngày tạo</th>
                                <th style={{ width: 130 }} className="text-center">Status</th>
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                
                        </tr>
                    </thead>
                    <tbody>
                    {categorys.map(function(category,index)
                            {
                                return(
                                    <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox" />
                                </td>
                                 <td className="text-center">{category.id}</td>
                                <td className="text-center">
                                    {category.parent_id}
                                </td>
                                <td>
                                    <img src={urlImage+'category/'+category.image} alt="hinh" className="img-fluid"/>
    
                                </td>             
                                <td>{category.name}</td>
                                <td>{category.slug}</td>
                                <td className="text-center">{category.created_at}</td>
                                <td className="text-center">{category.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-success me-1" to={"/admin/category/show/"+category.id}>
                                        <FaEye />
                                    </Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/"+category.id}>
                                        <FaEdit />
                                    </Link>
                                    <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger ">
                                        <FaTrash />
                                    </button>
                                </td>
                               
                            </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div>
        ); 
}

export default Categorylist;