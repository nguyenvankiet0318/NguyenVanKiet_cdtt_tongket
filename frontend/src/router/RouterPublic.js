import { Shop } from "@mui/icons-material";
import Home from "../pages/Frontend/Home/Home";
import Product_detail from "../pages/Product_detail";
import shop from "../pages/shop";
import Product from "../pages/Frontend/Product/Product";
import ProductDetail from "../pages/Frontend/Product/ProductDetail";
import ProductCategory from "../pages/Frontend/Product/ProductCategory";
import ProductBrand from "../pages/Frontend/Product/ProductBrand";
import Contact from "../pages/Contact";
import About from "../pages/About";

const RouterPublic = [
    { path: '/', component: Home},
    { path: '/chi-tiet-san-pham/:slug', component: ProductDetail },
    { path: '/danh-muc-san-pham/:slug', component: ProductCategory },
    { path: '/thuong-hieu/:slug', component: ProductBrand },
    { path: '/shop', component: Product},
    { path: '/Contact', component: Contact},
    { path: '/About', component: About}




];
export default RouterPublic;