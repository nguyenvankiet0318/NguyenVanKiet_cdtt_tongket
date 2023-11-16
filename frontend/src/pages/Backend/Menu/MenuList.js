import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import menuservice from "../../../services/MenuServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function MenuList() {
    
    const [statusdel, setStatusDelete]=useState(0);
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setMenus(result.data.data)
            });
        })();
    }, [statusdel])
    function menuDelete(id)
    {
        menuservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">MENU</strong>

                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/menu/create"><FaPlus />  Thêm</Link>
                    </div>


                </div>

            </div>
            <div className="card-body">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên menu</th>
                            <th>Link</th>
                            <th>Type</th>
                            <th>Ngày tạo</th>
                            <th>Table_id</th>
                            <th>Parent_id</th>
                            <th>ID</th>
                            <th>Sắp xếp</th>
                            <th>Vị trí</th>
                            <th>Level</th>
                            <th>Status</th>
                            <th>Chức năng</th>
                        </tr>

                    </thead>
                    <tbody>
                        {menus.map(function (menu, index) {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>{menu.name}</td>
                                    <td>{menu.link}</td>
                                    <td>{menu.type}</td>
                                    <td>{menu.created_at}</td>
                                    <td>{menu.table_id}</td>
                                    <td>{menu.parent_id}</td>
                                    <td>{menu.id}</td>
                                    <td>{menu.sort_order}</td>
                                    <td>{menu.position}</td>
                                    <td>{menu.level}</td>
                                    <td>{menu.status}</td>
                                    <td><Link className="btn btn-sm btn-info me-1" to={"/admin/menu/show/"+ menu.id}><FaRegEye /></Link>
                                        <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/"+ menu.id}><FaEdit /></Link>
                                        <button onClick={()=>menuDelete(menu.id)} className="btn btn-sm btn-danger"><FaTrash /></button></td>

                                </tr>

                            );



                        })}

                    </tbody>


                </table>


            </div>
        </div>
    );
}

export default MenuList;