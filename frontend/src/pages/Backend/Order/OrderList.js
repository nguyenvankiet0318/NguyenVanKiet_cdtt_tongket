import { Link } from "react-router-dom";
import { FiPlus,FiEye,FiEdit,FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import orderservices from "../../../services/OrderServices";
function OrderList() {
    const [statusdel, setStatusDelete]=useState(0);
    const [orders,setOrder]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservices.getAll().then(function(result){
                setOrder(result.data.orders)
            })
        })();
        
    },[statusdel]);

    function orderDelete(id)
    {
        orderservices.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }

    return ( 
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">ĐƠN HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link to="/admin/order/create"className="btn btn-sm btn-success"><FiPlus/>Thêm</Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table className="table table-striped table-border table-hover">
                    <thead>
                        <tr>
                            <th style={{width:"20"}} className="text-center">#</th>
                            <th style={{width:"30"}} className="text-center">ID</th>
                            <th style={{width:"50"}} className="text-center">Tên</th>
                            <th style={{width:"100"}} className="text-center">Email</th>
                            <th className="text-center">Số điện thoại</th>
                            <th className="text-center">Địa chỉ</th>
                            <th className="text-center">Note</th>
                            <th style={{width:"100"}} className="text-center">Ngày tạo</th>
                            <th style={{width:"30"}} className="text-center">Status</th>
                            <th style={{width:"140"}} className="text-center">Chức năng</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(function(order,index){
                            return(
                                <tr key={index}>
                                <td className="text-center">
                                    <input type="checkbox"></input>
                                </td>
                                <td className="text-center">{order.id}</td>
                                <td style={{width:"30"}} className="text-center">{order.name}</td>
                                <td className="text-center">{order.email}</td>
                                <td className="text-center">{order.phone}</td>
                                <td className="text-center">{order.address}</td>
                                <td className="text-center">{order.note}</td>
                                <td className="text-center">{order.created_at}</td>
                                <td className="text-center">{order.status}</td>
                                <td className="text-center">
                                    <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+order.id}><FiEye/></Link>
                                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/"+order.id}><FiEdit/></Link>
                                    <button onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger "> 
                                    
                                    <FiTrash2/></button>
                                </td>
                               
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
        );
}

export default OrderList;
