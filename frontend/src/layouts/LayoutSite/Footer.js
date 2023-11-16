import { Link } from "react-router-dom";

function Footer (){
    return(
//        <!-- Footer Section Begin -->
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <Link href="#"><img src="img/footer-logo.png" alt=""/></Link>
                        </div>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <Link href="#"><img src="img/payment.png" alt=""/></Link>
                    </div>
                </div>
                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><Link href="#">Clothing Store</Link></li>
                            <li><Link href="#">Trending Shoes</Link></li>
                            <li><Link href="#">Accessories</Link></li>
                            <li><Link href="#">Sale</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Payment Methods</Link></li>
                            <li><Link href="#">Delivary</Link></li>
                            <li><Link href="#">Return & Exchanges</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer__widget">
                        <h6>NewLetter</h6>
                        <div className="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                            <form action="#">
                                <input type="text" placeholder="Your email"/>
                                <button type="submit"><span className="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer__copyright__text">
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        <p>Copyright ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>2020
                            All rights reserved | This template is made with <i className="fa fa-heart-o"
                            aria-hidden="true"></i> by <Link href="https://colorlib.com" target="_blank">Colorlib</Link>
                        </p>
                        {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
//    <!-- Footer Section End -->
    );
}
export default Footer;