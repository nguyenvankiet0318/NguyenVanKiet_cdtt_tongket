import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import categoryservice from "../../../services/CategoryServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function CategoryShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [category, setCategory] = useState([]);
  useEffect(function () {
    (async function () {
      await categoryservice.getById(id).then(function (result) {
        setCategory(result.data.data)
      });
    })();
  }, [])
  function categoryDelete(id)
  {
    categoryservice.remove(id).then(function (result) {
          alert(result.data.message);
          navigate('/admin/category/', { replace: true });
      });
  }

  return (
    <div classNmae="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">Thêm danh mục</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/category" className="btn btn-sm btn-info me-2">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/category/update/" + category.id}
            >
              Sửa <FaEdit />
            </Link>
            <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger">
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
              <td>{category.id}</td>
            </tr>
            <tr>
              <th>Tên danh mục</th>
              <td>{category.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{category.slug}</td>
            </tr>
            <tr>
              <th>Hình</th>
              <td>
                <img src={urlImage+"category/"+category.image} alt="hinh" className="img-fluid" style={{maxWidth:200}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CategoryShow;
