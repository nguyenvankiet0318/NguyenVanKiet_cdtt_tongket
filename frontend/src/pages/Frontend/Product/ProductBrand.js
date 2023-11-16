import { useState } from "react";
import ProductItem from "../../../components/frontend/productItem";
import ListBrand from "../../../layouts/LayoutSite/ListBrand";
import ListCategory from "../../../layouts/LayoutSite/ListCategory";
import brandservice from "../../../services/BrandServices";
import productservice from "../../../services/ProductServices";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function ProductBrand() {
    const { slug } = useParams(); // do-nam
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(4);
    const [title, setTitle] = useState("");
    document.title = title;
    useEffect(function () {
        (async function () {
            try {
                const result_brand = await brandservice.getById(slug);
                const brandid = result_brand.data.data.id; // id cua mau tin co slug=do-nam
                setTitle(result_brand.data.data.name)
                const result = await productservice.getProductByBrandId(limit,brandid)
                setProducts(result.data.products);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [limit, slug])
    return (
        <section className="shop__sidebar__accordion">
        <div className="container my-4">
            <div className="col">
                <div className="col-md-2">
                    <ListCategory/>
                    <ListBrand/>
                </div>
                    <div className="col-md-9">
                        <h3 className="text-center">{title}</h3>
                        <div className="row">
                            {products.map(function (product, index) {
                                return <ProductItem product={product} key={index}/>
                            })}
                        </div>
                        </div>
                         </div>
                         </div>
                         <div className="row">
                            <div className="col-12 text-center my-4">
                                <button className="btn btn-success" onClick={() => setLimit(limit + 4)}>Xem thêm</button>
                            </div>
                        </div>
        </section>
                       
                  
    );
}

export default ProductBrand;