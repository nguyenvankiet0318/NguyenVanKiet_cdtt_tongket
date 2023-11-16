import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import orderservices from "../../../services/OrderServices";
import { FiRotateCcw,FiEdit,FiTrash2 } from "react-icons/fi";

function OrderShow() {
    const {id}=useParams("id");
    const [order,setOrder]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservices.getById(id).then(function(result){
                setOrder(result.data.order);
            })
        })();
    },[]);
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT ĐƠN HÀNG</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/" + order.id}><FiEdit />Sửa</Link>
                        <button className="btn btn-sm btn-danger me-1"><FiTrash2 />Xóa</button>
                        <Link to="/admin/order" className="btn btn-sm btn-info"><FiRotateCcw />Quay lại</Link>
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
                            <td>{order.id}</td>
                        </tr>
                        <tr>
                            <th>User Id</th>
                            <td>{order.user_id}</td>
                        </tr>
                        <tr>
                            <th>Tên </th>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{order.address}</td>
                        </tr>
                        <tr>
                            <th>Ghi chú</th>
                            <td>{order.note}</td>
                        </tr>
                        <tr>
                            <th>Status</th>
                            <td>{order.status}</td>
                        </tr>
                        <tr>
                            <th>Ngày thêm</th>
                            <td>{order.created_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default OrderShow;