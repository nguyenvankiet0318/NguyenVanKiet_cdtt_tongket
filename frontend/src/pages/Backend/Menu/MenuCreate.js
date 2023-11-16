import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuServices";


function MenuCreate() {
  const [menus, setMenus] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getAll().then(function (result) {
        setMenus(result.data.data)
      });
    })();
  }, [])


  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [type, setType] = useState("custom");
  const [table_id, setTableId] = useState(0);
  const [parent_id, setParentId] = useState(0);
  const [sort_order, setSortOrder] = useState(0);
  const [position, setPosition] = useState("mainmenu");
  const [level, setLevel] = useState(1);
  const [status, setStatus] = useState(1);


  async function menuStore(event) {
    event.preventDefault();
    var menu = new FormData();
    menu.append("name", name)
    menu.append("type", type)
    menu.append("table_id", table_id)
    menu.append("parent_id", parent_id)
    menu.append("sort_order", sort_order)
    menu.append("position", position)
    menu.append("level", level)
    menu.append("status", status)
    await menuservice.create(menu).then(function (res) {
      alert(res.data.message)
      navigate('/admin/menu/', { replace: true });
    });;

  }
  return (
    <form onSubmit={menuStore} method="post">
      <div classNmae="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-6">
              <strong className="text-danger">Thêm menu</strong>
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
                <label htmlFor="table_id">table_id</label>
                <select
                  name="table_id"
                  className="form-control"
                  value={table_id}
                  onChange={(e) => setTableId(e.target.value)}
                >
                  <option value="0">0</option>
                </select>
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

export default MenuCreate;
