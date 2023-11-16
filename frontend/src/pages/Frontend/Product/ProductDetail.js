import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductItem from '../../../components/frontend/productItem';
import { Link } from 'react-router-dom';
import productservice from '../../../services/ProductServices';
import { urlImage } from '../../../config';

function ProductDetail() {
    const {slug} = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);

    useEffect(function () {
        (async function () {
            await productservice.getProductBySlug(slug).then(function (result) {
                if(result.data.success==true)
                {
                    setProduct(result.data.product);
                    setProductOther(result.data.product_other);
                }
            });
        })();
    }, [slug])
    return (
        <section className="maincontent">
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <img src={urlImage + 'product/'+product.image} alt="hinh" className="img-fluid w-100" />
                    </div>
                    <div className="col-md-6">
                        <h1>{product.name}</h1>
                        <h1>{product.price}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>{product.detail}</h1>
                    </div>
                </div>
                <h3>Sản phẩm cùng loại</h3>
                <div className="row">
                    {product_other.map(function(product,index){
                        return <ProductItem key={index} product={product}/>
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;