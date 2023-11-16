import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../services/ProductServices";
import brandservice from "../../../services/BrandServices";
import categoryservice from "../../../services/CategoryServices";


function ProductUpdate() {
    const navigate = useNavigate();
    //Khai bao status
    const [name, setName] = useState("");
    const [metakey, setMetakey] = useState("");
    const [metadesc, setMetadesc] = useState("");
    const [category_id, setCategoryId] = useState(0);
    const [brand_id, setBrandId] = useState(0);
    const [price, setPrice] = useState(0);
    const [price_sale, setPriceSale] = useState(0);
    const [qty, setQty] = useState(0);
    const [detail, setDetail] = useState("");
    const [status, setStatus] = useState(1);
    //Chi tiết mẫu tin có id
    const { id } = useParams("id");
    //const [product, setproduct] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getById(id).then(function (result) {
                const tmp = result.data.data;
                //setproduct(tmp);
                setName(tmp.name);
                setMetakey(tmp.metakey);
                setMetadesc(tmp.metadesc);
                setCategoryId(tmp.category_id);
                setBrandId(tmp.brand_id);
                setPrice(tmp.price);
                setPriceSale(tmp.price_sale);
                setQty(tmp.qty);
                setDetail(tmp.detail);
                setStatus(tmp.status);
            });
        })();
    }, [])
    //Lấy danh sách
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getAll().then(function (result) {
                setProducts(result.data.data)
            });
        })();
    }, [])

    const [brands, setBrands] = useState([]);
    useEffect(function () {
        (async function () {
            await brandservice.getAll().then(function (result) {
                setBrands(result.data.data)
            });
        })();
    }, [])

    const [categorys, setCategorys] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategorys(result.data.data)
            });
        })();
    }, [])


    async function productEdit(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var product = new FormData();
        product.append("name", name)
        product.append("category_id", category_id)
        product.append("brand_id", brand_id)
        product.append("price", price)
        product.append("price_sale", price_sale)
        product.append("qty", qty)
        product.append("detail", detail)
        product.append("metakey", metakey)
        product.append("metadesc", metadesc)
        product.append("status", status)
        if (image.files.length === 0) {
            product.append("image", "");
        }
        else {
            product.append("image", image.files[0]);
        }

        await productservice.update(product, id).then(function (res) {
            alert(res.data.message)
            navigate('/admin/product/', { replace: true });
        });;
    }
    return (
        <form onSubmit={productEdit} method="post">
            <div classNmae="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            <strong className="text-danger">Cập nhật sản phẩm</strong>
                        </div>
                        <div className="col-md-6 text-end">
                            <button type="submit" className="btn btn-sm btn-success me-2">
                                Lưu
                            </button>
                            <Link to="/admin/product" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="col-mb-3">
                                <label htmlFor="name">Tên sản phẩm </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="metakey">Từ khóa </label>
                                <textarea
                                    name="metakey"
                                    value={metakey}
                                    onChange={(e) => setMetakey(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="metadesc">Mô tả </label>
                                <textarea
                                    name="metadesc"
                                    value={metadesc}
                                    onChange={(e) => setMetadesc(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="detail">Chi tiết </label>
                                <textarea
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-mb-3">
                                <label htmlFor="category_id">Thuộc danh mục </label>
                                <select
                                    name="category_id"
                                    className="form-control"
                                    value={category_id}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="0">None</option>
                                    {categorys.map(function (cat, index) {
                                        return (
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="brand_id">Thuộc thương hiệu </label>
                                <select
                                    name="brand_id"
                                    className="form-control"
                                    value={brand_id}
                                    onChange={(e) => setBrandId(e.target.value)}
                                >
                                    <option value="0">None</option>
                                    {brands.map(function (brand, index) {
                                        return (
                                            <option key={index} value={brand.id}>{brand.name}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="price">Giá</label>
                                <input
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="price">Giảm giá</label>
                                <input
                                    name="price"
                                    value={price_sale}
                                    onChange={(e) => setPriceSale(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="price">Qty</label>
                                <input
                                    name="price"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="col-mb-3">
                                <label htmlFor="image">Hình đại diện</label>
                                <input type="file" id="image" className="form-control" />
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

export default ProductUpdate;