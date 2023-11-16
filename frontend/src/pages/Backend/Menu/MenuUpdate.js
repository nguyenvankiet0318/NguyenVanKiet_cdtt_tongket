import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import menuservice from "../../../services/MenuServices";
import { urlImage } from "../../../config";

function MenuUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState("");
    const [type, setType] = useState("custom");
    const [table_id, setTableId] = useState(0);
    const [parent_id, setParentId] = useState(0);
    const [sort_order, setSortOrder] = useState(0);
    const [position, setPosition] = useState("mainmenu");
    const [level, setLevel] = useState(1);
    const [status, setStatus] = useState(1);
    //Chi tiết mẫu tin có id
    const { id } = useParams("id");
    //const [menu, setmenu] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                //setmenu(tmp);
                setName(tmp.name);
                setType(tmp.type);
                setTableId(tmp.table_id);
                setStatus(tmp.status);
                setParentId(tmp.parent_id);
                setSortOrder(tmp.sort_order);
                setPosition(tmp.position);
                setLevel(tmp.level);
            });
        })();
    }, [])
    //Lấy danh sách
    const [menus, setMenus] = useState([]);
    useEffect(function () {
        (async function () {
            await menuservice.getAll().then(function (result) {
                setMenus(result.data.data)
            });
        })();
    }, [])


    async function menuEdit(event) {
        event.preventDefault();
        var menu = new FormData();
        menu.append("name", name)
        menu.append("type", type)
        menu.append("table_id", table_id)
        menu.append("parent_id", parent_id)
        menu.append("sort_order", sort_order)
        menu.append("status", status)
        menu.append("position", position)
        menu.append("level", level)



        await menuservice.update(menu, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/menu/', { replace: true });
        });;
    }
    return (
        <form onSubmit={menuEdit} method="post">
            <div classNmae="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Cập nhật danh mục</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/menu" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="col-mb-3">
                                <label htmlFor="name">Tên menu </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="type">Type</label>
                                <select
                                    name="type"
                                    className="form-control"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="custom">Custom</option>
                                    <option value="page">Page</option>
                                    <option value="category">Category</option>
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="table_id">Table_id </label>
                                <textarea
                                    name="table_id"
                                    value={table_id}
                                    onChange={(e) => setTableId(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-mb-3">
                                <label htmlFor="parent_id">Menu cha </label>
                                <select
                                    name="parent_id"
                                    className="form-control"
                                    value={parent_id}
                                    onChange={(e) => setParentId(e.target.value)}
                                >
                                    <option value="0">Menu cha</option>
                                    {menus.map(function (menu, index) {
                                        return (
                                            <option key={index} value={menu.id}>{menu.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="sort_order">Sắp xếp </label>
                                <select
                                    name="sort_order"
                                    className="form-control"
                                    value={sort_order}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="0">None</option>
                                    {menus.map(function (menu, index) {
                                        return (
                                            <option key={index} value={menu.sort_order + 1}>Sau: {menu.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="position">Position</label>
                                <select
                                    name="position"
                                    className="form-control"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                >
                                    <option value="mainmenu">mainmenu</option>
                                    <option value="slidershow">slidershow</option>
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="level">Level</label>
                                <select
                                    name="level"
                                    className="form-control"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
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

export default MenuUpdate;