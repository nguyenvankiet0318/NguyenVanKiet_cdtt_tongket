import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import menuservice from "../../../services/MenuServices";
import { useEffect, useState } from "react";
function MenuShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [menu, setMenu] = useState([]);
  useEffect(function () {
    (async function () {
      await menuservice.getById(id).then(function (result) {
        setMenu(result.data.data)
      });
    })();
  }, [])
  function menuDelete(id)
    {
        menuservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/menu/', { replace: true });
        });
    }
  return (
    <div classNmae="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">Chi tiết menu</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/menu" className="btn btn-sm btn-info me-2">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/menu/update/" + menu.id}
            >
              Sửa <FaEdit />
            </Link>
            <button onClick={()=>menuDelete(menu.id)} className="btn btn-sm btn-danger">
              Xóa <FaTrash />
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{width:200}}>Tên trường</th>
              <th>Giá trị</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Id</th>
              <td>{menu.id}</td>
            </tr>
            <tr>
              <th>Tên danh mục</th>
              <td>{menu.name}</td>
            </tr>
            <tr>
              <th>link</th>
              <td>{menu.link}</td>
            </tr>
            <tr>
              <th>Vị trí</th>
              <td>{menu.position}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuShow;
