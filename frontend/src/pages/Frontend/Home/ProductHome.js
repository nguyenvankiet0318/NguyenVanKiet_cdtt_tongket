import products from '../../../data/product.json'
import ProductItem from "../../../components/frontend/productItem";
import { useEffect, useState } from 'react';
import productservice from '../../../services/ProductServices';
import { Link } from 'react-router-dom';

function ProductHome(props) {
    const [products, setProducts] = useState([]);
    useEffect(function () {
        (async function () {
            await productservice.getProductHome(4, props.category.id).then(function (result) {
                setProducts(result.data.products)
            });
        })();
    }, [])
    if (products != null) {
        return (
            <div className="container">
                <div className="product-category my-4">
                    <div className="title-product">
                        <h3 className="text-center"> {props.category.name} </h3>
                        <hr></hr>
                        <h5 className="text-center">Mới nhất 2023</h5>
                    </div>
                    <div className="row">
                        {products.map(function (product, index) {
                            return (
                                <ProductItem product={product} key={index} />
                            );
                        })}
                    </div>
                    <div className='text-center my-3'>
                        <Link to={"san-pham/" + props.category.slug} className="btn btn-success">Xem thêm</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductHome;