import { Link } from "react-router-dom";
import { FaPlus, FaRegEye, FaEdit, FaTrash } from "react-icons/fa";
import brandservice from "../../../services/BrandServices";
import { useEffect, useState } from "react";
import { urlImage } from "../../../config";
function BrandList() {
  const [statusdel, setStatusDelete]=useState(0);
  const [brands, setBrands] = useState([]);
  useEffect(function () {
    (async function () {
      await brandservice.getAll().then(function (result) {
        setBrands(result.data.data)
      });
    })();
  }, [statusdel])
  function brandDelete(id)
    {
        brandservice.remove(id).then(function (result) {
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
            <Link className="btn btn-sm btn-success" to="/admin/brand/create"><FaPlus />  Thêm</Link>
          </div>


        </div>

      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: 120 }}>Hình</th>
              <th>Tên thương hiệu</th>
              <th>Slug</th>
              <th>Ngày tạo</th>
              <th>Sắp xếp</th>
              <th>ID</th>
              <th>Status</th>
              <th>Chức năng</th>
            </tr>

          </thead>
          <tbody>
            {brands.map(function (brand, index) {
              return (
                <tr key={index}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <img src={urlImage + 'brand/' + brand.image} alt="hinh" className="img-fluid" width={400} />

                  </td>
                  <td>{brand.name}</td>
                  <td>{brand.slug}</td>
                  <td>{brand.created_at}</td>
                  <td>{brand.sort_order}</td>
                  <td>{brand.id}</td>
                  <td>{brand.status}</td>
                  <td><Link className="btn btn-sm btn-info me-1" to={"/admin/brand/show/" + brand.id}><FaRegEye /></Link>
                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/" + brand.id}><FaEdit /></Link>
                    <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger"><FaTrash /></button></td>

                </tr>

              );



            })}

          </tbody>


        </table>


      </div>
    </div>

  );
}

export default BrandList;