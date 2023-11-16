import { useEffect, useState } from "react";
import { urlImage } from "../config";
import productservice from "../services/ProductServices"
import { Link } from "react-router-dom";
function Shop(){
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
        <>
    {/* // <!-- Breadcrumb Section Begin --> */}
    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>Shop</h4>
                        <div className="breadcrumb__links">
                            <Link href="./index.html">Home</Link>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* // <!-- Breadcrumb Section End --> */}

    {/* // <!-- Shop Section Begin --> */}
    <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="shop__sidebar__accordion">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseOne">Categories</Link>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                                <ul className="nice-scroll">
                                                    <li><Link href="#">Men (20)</Link></li>
                                                    <li><Link href="#">Women (20)</Link></li>
                                                    <li><Link href="#">Bags (20)</Link></li>
                                                    <li><Link href="#">Clothing (20)</Link></li>
                                                    <li><Link href="#">Shoes (20)</Link></li>
                                                    <li><Link href="#">Accessories (20)</Link></li>
                                                    <li><Link href="#">Kids (20)</Link></li>
                                                    <li><Link href="#">Kids (20)</Link></li>
                                                    <li><Link href="#">Kids (20)</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseTwo">Branding</Link>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                <ul>
                                                    <li><Link href="#">Louis Vuitton</Link></li>
                                                    <li><Link href="#">Chanel</Link></li>
                                                    <li><Link href="#">Hermes</Link></li>
                                                    <li><Link href="#">Gucci</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseThree">Filter Price</Link>
                                    </div>
                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                                <ul>
                                                    <li><Link href="#">$0.00 - $50.00</Link></li>
                                                    <li><Link href="#">$50.00 - $100.00</Link></li>
                                                    <li><Link href="#">$100.00 - $150.00</Link></li>
                                                    <li><Link href="#">$150.00 - $200.00</Link></li>
                                                    <li><Link href="#">$200.00 - $250.00</Link></li>
                                                    <li><Link href="#">250.00+</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseFour">Size</Link>
                                    </div>
                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label for="xs">xs
                                                    <input type="radio" id="xs"/>
                                                </label>
                                                <label for="sm">s
                                                    <input type="radio" id="sm"/>
                                                </label>
                                                <label for="md">m
                                                    <input type="radio" id="md"/>
                                                </label>
                                                <label for="xl">xl
                                                    <input type="radio" id="xl"/>
                                                </label>
                                                <label for="2xl">2xl
                                                    <input type="radio" id="2xl"/>
                                                </label>
                                                <label for="xxl">xxl
                                                    <input type="radio" id="xxl"/>
                                                </label>
                                                <label for="3xl">3xl
                                                    <input type="radio" id="3xl"/>
                                                </label>
                                                <label for="4xl">4xl
                                                    <input type="radio" id="4xl"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseFive">Colors</Link>
                                    </div>
                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__color">
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
                                                <label className="c-5" for="sp-5">
                                                    <input type="radio" id="sp-5"/>
                                                </label>
                                                <label className="c-6" for="sp-6">
                                                    <input type="radio" id="sp-6"/>
                                                </label>
                                                <label className="c-7" for="sp-7">
                                                    <input type="radio" id="sp-7"/>
                                                </label>
                                                <label className="c-8" for="sp-8">
                                                    <input type="radio" id="sp-8"/>
                                                </label>
                                                <label className="c-9" for="sp-9">
                                                    <input type="radio" id="sp-9"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <Link data-toggle="collapse" data-target="#collapseSix">Tags</Link>
                                    </div>
                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                                <Link href="#">Product</Link>
                                                <Link href="#">Bags</Link>
                                                <Link href="#">Shoes</Link>
                                                <Link href="#">Fashio</Link>
                                                <Link href="#">Clothing</Link>
                                                <Link href="#">Hats</Link>
                                                <Link href="#">Accessories</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="shop__product__option">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select>
                                        <option value="">Low To High</option>
                                        <option value="">$0 - $55</option>
                                        <option value="">$55 - $100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {products.map(function (product, index) {
                        return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                            <div className="product__item__pic">
                              <a href={"product-detail/"+ product.slug}>  <img src={urlImage + 'product/' + product.image}/></a></div>
                              <ul className="product__hover">
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>{product.name}</h6>
                                    
                                    <h5>{product.price}</h5>
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
                            
                     
                        
                  

                    )
                })}



                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__pagination">
                                <Link className="active" href="#">1</Link>
                                <Link href="#">2</Link>
                                <Link href="#">3</Link>
                                <span>...</span>
                                <Link href="#">21</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    {/* <!-- Shop Section End --> */}
    </>
    );

}
export default Shop;