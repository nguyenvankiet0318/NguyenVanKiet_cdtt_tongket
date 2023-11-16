import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../services/ProductServices"
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
    return(
// <!-- Product Section Begin -->
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*">Best Sellers</li>
                        <li data-filter=".new-arrivals">New Arrivals</li>
                        <li data-filter=".hot-sales">Hot Sales</li>
                    </ul>
                </div>
            </div>
            <div className="row product__filter">
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
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
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
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
                            <div class="rating">
                               
                            </div>
                            <h5>$43.48</h5>
                            <div class="product__color__select">
                                <label for="pc-7">
                                    <input type="radio" id="pc-7"/>
                                </label>
                                <label class="active black" for="pc-8">
                                    <input type="radio" id="pc-8"/>
                                </label>
                                <label class="grey" for="pc-9">
                                    <input type="radio" id="pc-9"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="../../assets/img/product/product-4.jpg">
                            <ul class="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Diagonal Textured Cap</h6>
                            <Link to="#" class="add-cart">+ Add To Cart</Link>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$60.9</h5>
                            <div class="product__color__select">
                                <label for="pc-10">
                                    <input type="radio" id="pc-10"/>
                                </label>
                                <label class="active black" for="pc-11">
                                    <input type="radio" id="pc-11"/>
                                </label>
                                <label class="grey" for="pc-12">
                                    <input type="radio" id="pc-12"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="../../assets/img/product/product-5.jpg">
                            <ul class="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Lether Backpack</h6>
                            <Link to="#" class="add-cart">+ Add To Cart</Link>
                            <div class="rating">
                               
                            </div>
                            <h5>$31.37</h5>
                            <div class="product__color__select">
                                <label for="pc-13">
                                    <input type="radio" id="pc-13"/>
                                </label>
                                <label class="active black" for="pc-14">
                                    <input type="radio" id="pc-14"/>
                                </label>
                                <label class="grey" for="pc-15">
                                    <input type="radio" id="pc-15"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div class="product__item sale">
                        <div class="product__item__pic set-bg" data-setbg="../../assets/img/product/product-6.jpg">
                            <span class="label">Sale</span>
                            <ul class="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Ankle Boots</h6>
                            <Link to="#" class="add-cart">+ Add To Cart</Link>
                            <div class="rating">
                               
                            </div>
                            <h5>$98.49</h5>
                            <div class="product__color__select">
                                <label for="pc-16">
                                    <input type="radio" id="pc-16"/>
                                </label>
                                <label class="active black" for="pc-17">
                                    <input type="radio" id="pc-17"/>
                                </label>
                                <label class="grey" for="pc-18">
                                    <input type="radio" id="pc-18"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="../../assets/img/product/product-7.jpg">
                            <ul class="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>T-shirt Contrast Pocket</h6>
                            <Link to="#" class="add-cart">+ Add To Cart</Link>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$49.66</h5>
                            <div class="product__color__select">
                                <label for="pc-19">
                                    <input type="radio" id="pc-19"/>
                                </label>
                                <label class="active black" for="pc-20">
                                    <input type="radio" id="pc-20"/>
                                </label>
                                <label class="grey" for="pc-21">
                                    <input type="radio" id="pc-21"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="../../assets/img/product/product-8.jpg">
                            <ul class="product__hover">
                                <li><Link to="#"><img src="../../assets/img/icon/heart.png" alt=""/></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/compare.png" alt=""/> <span>Compare</span></Link></li>
                                <li><Link to="#"><img src="../../assets/img/icon/search.png" alt=""/></Link></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>Basic Flowing Scarf</h6>
                            <Link to="#" class="add-cart">+ Add To Cart</Link>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>$26.28</h5>
                            <div class="product__color__select">
                                <label for="pc-22">
                                    <input type="radio" id="pc-22"/>
                                </label>
                                <label class="active black" for="pc-23">
                                    <input type="radio" id="pc-23"/>
                                </label>
                                <label class="grey" for="pc-24">
                                    <input type="radio" id="pc-24"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // {/* <!-- Product Section End --> */}
);
}
export default Product;