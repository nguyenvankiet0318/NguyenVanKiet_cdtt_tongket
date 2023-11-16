
import ProductItem from "../../../components/frontend/productItem";
import productservice from "../../../services/ProductServices";
import ProductBrand from "./ProductBrand";
import { useEffect, useState } from "react";


function Product() {
  const [limit, setLimit] = useState(8);
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductAll(limit).then(function (result) {
        setProducts(result.data.products)
      });
    })();
  }, [limit])
  return (
    <section className="shop spad">
      <div className="container">
       
        <div className="row">
         <div className="row-lg-5">
         <div class="shop__sidebar">
          <ProductBrand/>
          </div>
          <div className="product-item">
          <div class="row">
          <h3 className="text-center">TẤT CẢ SẢN PHẨM</h3>
                       {products.map(function (product, index) {
                         return <ProductItem product={product} key={index} />;
                       })}
                       </div>
        </div>
        </div>
        </div>
        <div className="row">
          <div className="col-12 text-center bg-white">
            <button className="btn btn-success" onClick={() => setLimit(limit + 8)}>Xem thêm</button>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Product;
