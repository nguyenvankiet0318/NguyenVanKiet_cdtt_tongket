import { Link } from "react-router-dom";
import { urlImage } from "../../config";
function ProductItem(props) {

    return (
        <>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <figure>
                        <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                            <img src={urlImage + "product/" + props.product.image} alt="" />
                            
                        </Link>
                        <div class="p-status">new</div>
                    </figure>
                    <div class="product-text">
                        <h6>{props.product.name}</h6>
                        <p>{props.product.price} VND</p>
                    </div>
                </div>
            </div>


            {/* <div className="col-md-4 mb-3">
                <div className="product-item border">
                    <div className="product-image">
                        <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                            <img
                                src={urlImage + "product/" + props.product.image}
                                id="anh2"
                                className="img-fluid"
                                alt="sanpham"
                            />
                        </Link>
                    </div>
                    <div className="product-name p-2">
                        <h3 className="text-center-fs-6">
                            <Link to={"/chi-tiet-san-pham/" + props.product.slug}>
                                {props.product.name}
                            </Link>
                        </h3>
                    </div>
                    <div className="product-price p-1">
                        <div className="row">
                            <div className="col-6 ">
                                <strong className="text-danger fs-5 border">Sale:{props.product.price_sale}<sup>đ</sup></strong>
                            </div>
                            <div className="col-6">
                                <del className="fs-7">Price:{props.product.price}<sup>đ</sup></del>
                            </div>
                            <div className="detailproduct"><br></br><p><Link>Chi tiết sản phẩm</Link></p></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    );
}

export default ProductItem;