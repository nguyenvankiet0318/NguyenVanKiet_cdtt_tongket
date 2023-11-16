import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import brandservice from "../../../services/BrandServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function BrandShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [brand, setBrand] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getById(id).then(function (result) {
        setBrand(result.data.data)
      });
    })();
  }, [])
  function brandDelete(id)
    {
      brandservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/brand/', { replace: true });
        });
    }
  return (
    <div classNmae="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">Chi tiết thương hiệu</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/brand" className="btn btn-sm btn-info me-2">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/brand/update/" + brand.id}
            >
              Sửa <FaEdit />
            </Link>
            <button className="btn btn-sm btn-danger">
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
              <td>{brand.id}</td>
            </tr>
            <tr>
              <th>Tên thương hiệu</th>
              <td>{brand.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{brand.slug}</td>
            </tr>
            <tr>
              <th>Hình</th>
              <td>
                <img src={urlImage+"brand/"+brand.image} alt="hinh" className="img-fluid" style={{maxWidth:200}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BrandShow;
