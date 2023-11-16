import { Link } from "react-router-dom";
import { FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import productservice from "../../../services/ProductServices";
import { useEffect, useState } from "react";
import { urlImage } from '../../../config';

function ProductList() {
    const [statusdel, setStatusDelete]=useState(0);
    const [products, setProduct] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProduct(result.data.data)
            });
        })();
    }, [statusdel])
    function productDelete(id)
    {
        productservice.remove(id).then(function (result) {
            alert(result.data.message);
            setStatusDelete(result.data.id);
        });
    }
    return (
        <div className="Card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">SẢN PHẨM</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/product/create">
                            <FaPlus />Thêm
                        </Link>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: 30 }} className="text-center">#</th>
                                <th style={{ width: 80 }} className="text-center">Hình</th>
                                <th style={{ width: 50 }} className="text-center">Tên sản phẩm</th>
                                <th style={{ width: 100 }}>Slug</th>
                                <th style={{ width: 100 }} className="text-center">Category_id</th>
                                <th style={{ width: 100 }} className="text-center">Brand_id</th>
                                <th style={{ width: 100 }} className="text-center">Price</th>
                                <th style={{ width: 100 }} className="text-center">PriceSell</th>
                                <th style={{ width: 50 }} className="text-center">Qty</th>
                                <th style={{ width: 100 }} className="text-center">Ngày tạo</th>
                                <th style={{ width: 130 }} className="text-center">Chức năng</th>
                                <th style={{ width: 30 }} className="text-center">Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(function (product, index) {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="text-center">
                                            <img src={urlImage + "product/" + product.image} alt="hinh" className="img_fluid" style={{ width: 100 }} />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.slug}</td>
                                        <td>{product.category_id}</td>
                                        <td>{product.brand_id}</td>
                                        <td>{product.price}</td>
                                        <td>{product.price_sale}</td>
                                        <td>{product.qty}</td>
                                        <td className="text-center">{product.created_at}</td>
                                        <td className="text-center">
                                            <Link className="btn btn-sm btn-success me-1" to={"/admin/product/show/" + product.id}>
                                                <FaEye />
                                            </Link>
                                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/product/update/" + product.id}>
                                                <FaEdit />
                                            </Link>
                                            <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger ">
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td className="text-center">{product.id}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductList; 