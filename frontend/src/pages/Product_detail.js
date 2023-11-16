import { Link, useParams } from 'react-router-dom';
import productservice from '../services/ProductServices';
import { useEffect, useState } from 'react';

function Product_detail()  {
    const { slug } = useParams();
	const [product, setProduct] = useState([]);
	const [product_other, setProductOther] = useState([]);

	useEffect(function () {
		(async function () {
			await productservice.getProductBySlug(slug).then(function (result) {
				if (result.data.success == true) {
					setProduct(result.data.product);
					setProductOther(result.data.product_other);
				}
			});
		})();
	}, [slug])
    return(
    <>
        {/* <!-- Page Preloder --> */}
    {/* <div id="preloder">
        <div className="loader"></div>
    </div> */}

    {/* <!-- Offcanvas Menu Begin --> */}

    {/* <!-- Offcanvas Menu End --> */}

    {/* <!-- Header Section Begin --> */}

    {/* <!-- Header Section End --> */}

    {/* <!-- Shop Details Section Begin --> */}
    <section className="shop-details">
        <div className="product__details__pic">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__breadcrumb">
                            <Link to="./index.html">Home</Link>
                            <Link to="./shop.html">Shop</Link>
                            <span>Product Details</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <ul className="nav nav-tabs" role="tablist">
                            {/* <li className="nav-item">
                                <Link className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="../../assets/img/shop-details/thumb-1.png">
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="../../assets/img/shop-details/thumb-2.png">
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="../../assets/img/shop-details/thumb-3.png">
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">
                                    <div className="product__thumb__pic set-bg" data-setbg="../../assets/img/shop-details/thumb-4.png">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-9">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="../../assets/img/shop-details/product-big-2.png" alt="IMG-PRODUCT"/>
                                </div>
                            </div>
                            {/* <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="../../assets/img/shop-details/product-big-3.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="../../assets/img/shop-details/product-big.png" alt=""/>
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-4" role="tabpanel">
                                <div className="product__details__pic__item">
                                    <img src="../../assets/img/shop-details/product-big-4.png" alt=""/>
                                    <Link to="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" className="video-popup"><i className="fa fa-play"></i></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="product__details__content">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div className="product__details__text">
                            <h4>{product.name}</h4>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                                <span> - 5 Reviews</span>
                            </div>
                            <h3>{product.price}$<span>{product.price_sale}$</span></h3>
                            <p>Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable
                                cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
                            with placket.</p>
                            {/* <div className="product__details__option">
                                <div className="product__details__option__size">
                                    <span>Size:</span>
                                    <label for="xxl">xxl
                                        <input type="radio" id="xxl"/>
                                    </label>
                                    <label className="active" for="xl">xl
                                        <input type="radio" id="xl"/>
                                    </label>
                                    <label for="l">l
                                        <input type="radio" id="l"/>/
                                    </label>
                                    <label for="sm">s
                                        <input type="radio" id="sm"/>
                                    </label>
                                </div>
                                <div className="product__details__option__color">
                                    <span>Color:</span>
                                    <label className="c-1" for="sp-1">
                                        <input type="radio" id="sp-1"/>
                                    </label>
                                    <label className="c-2" for="sp-2">
                                        <input type="radio" id="sp-2"/>
                                    </label>
                                    <label className="c-3" for="sp-3">
                                        <input type="radio" id="sp-3"/>
                                    </label>
                                    <label className="c-4" for="sp-4">
                                        <input type="radio" id="sp-4"/>
                                    </label>
                                    <label className="c-9" for="sp-9">
                                        <input type="radio" id="sp-9"/>
                                    </label>
                                </div>
                            </div> */}
                            <div className="product__details__cart__option">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                </div>
                                <Link to="#" className="primary-btn">add to cart</Link>
                            </div>
                            <div className="product__details__btns__option">
                                <Link to="#"><i className="fa fa-heart"></i> add to wishlist</Link>
                                <Link to="#"><i className="fa fa-exchange"></i> Add To Compare</Link>
                            </div>
                            <div className="product__details__last__option">
                                <h5><span>Guaranteed Safe Checkout</span></h5>
                                <img src="../../assets/img/shop-details/details-payment.png" alt=""/>
                                <ul>
                                    <li><span>SKU:</span> 3812912</li>
                                    <li><span>Categories:</span> Clothes</li>
                                    <li><span>Tag:</span> Clothes, Skin, Body</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-toggle="tab" href="#tabs-5"
                                    role="tab">Description</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" href="#tabs-6" role="tab">Customer
                                    Previews(5)</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Additional
                                    information</Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                        pharetras loremos.</p>
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-6" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-7" role="tabpanel">
                                    <div className="product__details__tab__content">
                                        <p className="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                            solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                            ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                        pharetras loremos.</p>
                                        <div className="product__details__tab__content__item">
                                            <h5>Products Infomation</h5>
                                            <p>A Pocket PC is a handheld computer, which features many of the same
                                                capabilities as a modern PC. These handy little devices allow
                                                individuals to retrieve and store e-mail messages, create a contact
                                                file, coordinate appointments, surf the internet, exchange text messages
                                                and more. Every product that is labeled as a Pocket PC must be
                                                accompanied with specific software to operate the unit and must feature
                                            a touchscreen and touchpad.</p>
                                            <p>As is the case with any new technology product, the cost of a Pocket PC
                                                was substantial during it’s early release. For approximately $700.00,
                                                consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                                These days, customers are finding that prices have become much more
                                                reasonable now that the newness is wearing off. For approximately
                                            $350.00, a new Pocket PC can now be purchased.</p>
                                        </div>
                                        <div className="product__details__tab__content__item">
                                            <h5>Material used</h5>
                                            <p>Polyester is deemed lower quality due to its none natural quality’s. Made
                                                from synthetic materials, not natural like wool. Polyester suits become
                                                creased easily and are known for not being breathable. Polyester suits
                                                tend to have a shine to them compared to wool and cotton suits, this can
                                                make the suit look cheap. The texture of velvet is luxurious and
                                                breathable. Velvet is a great choice for dinner party jacket and can be
                                            worn all year round.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shop Details Section End --> */}

    {/* <!-- Related Section Begin --> */}
    <section className="related spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="related-title">Related Product</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="../../assets/img/product/product-1.jpg">
                            <span className="label">New</span>
                            <ul className="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <Link to="#" className="add-cart">+ Add To Cart</Link>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$67.24</h5>
                            <div className="product__color__select">
                                <label for="pc-1">
                                    <input type="radio" id="pc-1"/>
                                </label>
                                <label className="active black" for="pc-2">
                                    <input type="radio" id="pc-2"/>
                                </label>
                                <label className="grey" for="pc-3">
                                    <input type="radio" id="pc-3"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="../../assets/img/product/product-2.jpg">
                            <ul className="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Piqué Biker Jacket</h6>
                            <Link to="#" className="add-cart">+ Add To Cart</Link>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$67.24</h5>
                            <div className="product__color__select">
                                <label for="pc-4">
                                    <input type="radio" id="pc-4"/>
                                </label>
                                <label className="active black" for="pc-5">
                                    <input type="radio" id="pc-5"/>
                                </label>
                                <label className="grey" for="pc-6">
                                    <input type="radio" id="pc-6"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item sale">
                        <div className="product__item__pic set-bg" data-setbg="../../assets/img/product/product-3.jpg">
                            <span className="label">Sale</span>
                            <ul className="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Multi-pocket Chest Bag</h6>
                            <Link to="#" className="add-cart">+ Add To Cart</Link>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$43.48</h5>
                            <div className="product__color__select">
                                <label for="pc-7">
                                    <input type="radio" id="pc-7"/>
                                </label>
                                <label className="active black" for="pc-8">
                                    <input type="radio" id="pc-8"/>
                                </label>
                                <label className="grey" for="pc-9">
                                    <input type="radio" id="pc-9"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="../../assets/img/product/product-4.jpg">
                            <ul className="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>Diagonal Textured Cap</h6>
                            <Link to="#" className="add-cart">+ Add To Cart</Link>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>$60.9</h5>
                            <div className="product__color__select">
                                <label for="pc-10">
                                    <input type="radio" id="pc-10"/>
                                </label>
                                <label className="active black" for="pc-11">
                                    <input type="radio" id="pc-11"/>
                                </label>
                                <label className="grey" for="pc-12">
                                    <input type="radio" id="pc-12"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Related Section End --> */}

    </>
)};
export default Product_detail;