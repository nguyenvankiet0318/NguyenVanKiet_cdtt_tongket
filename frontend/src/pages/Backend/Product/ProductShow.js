import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import productservice from "../../../services/ProductServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function ProductShow() {
  const navigate = useNavigate();
  const { id } = useParams("id");
  const [product, setProduct] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getById(id).then(function (result) {
        setProduct(result.data.data)
      });
    })();
  }, [])
  function productDelete(id)
    {
        productservice.remove(id).then(function (result) {
            alert(result.data.message);
            navigate('/admin/product/', { replace: true });
        });
    }
  return (
    <div classNmae="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <strong className="text-danger">Chi tiết sản phẩm</strong>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/admin/product" className="btn btn-sm btn-info me-2">
              Về danh sách
            </Link>
            <Link
              className="btn btn-sm btn-primary me-1"
              to={"/admin/product/update/" + product.id}
            >
              Sửa <FaEdit />
            </Link>
            <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger">
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
              <td>{product.id}</td>
            </tr>
            <tr>
              <th>Tên sản phẩm</th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{product.slug}</td>
            </tr>
            <tr>
              <th>Hình</th>
              <td>
                <img src={urlImage+"product/"+product.image} alt="hinh" className="img-fluid" style={{maxWidth:200}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductShow;
