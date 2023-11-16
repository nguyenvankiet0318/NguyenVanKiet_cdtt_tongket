import Dashboard from "../pages/Backend/Dashboard/Dashboard";

import ProductCreate from "../pages/Backend/Product/ProductCreate";
import ProductList from "../pages/Backend/Product/ProductList";
import ProductShow from "../pages/Backend/Product/ProductShow";
import ProductUpdate from "../pages/Backend/Product/ProductUpdate";
import BrandCreate from "../pages/Backend/Brand/BrandCreate";
import BrandShow from "../pages/Backend/Brand/BrandShow";
import BrandList from "../pages/Backend/Brand/Brandlist";
import Brandupdate from "../pages/Backend/Brand/Brandupdate";
import Categorylist from "../pages/Backend/Category/Categorylist";
import CategoryCreate from "../pages/Backend/Category/CategoryCreate";
import Categoryupdate from "../pages/Backend/Category/Categoryupdate";
import CategoryShow from "../pages/Backend/Category/CategoryShow";
import ContactList from "../pages/Backend/Contact/ContactList";
import ContactCreate from "../pages/Backend/Contact/ContactCreate";
import ContactShow from "../pages/Backend/Contact/ContactShow";
import ContactUpdate from "../pages/Backend/Contact/ContactUpdate";
import UserList from "../pages/Backend/User/UserList";
import UserCreate from "../pages/Backend/User/UserCreate";
import UserUpdate from "../pages/Backend/User/UserUpdate";
import UserShow from "../pages/Backend/User/UserShow";
import MenuCreate from "../pages/Backend/Menu/MenuCreate";
import MenuUpdate from "../pages/Backend/Menu/MenuUpdate";
import MenuShow from "../pages/Backend/Menu/MenuShow";
import OrderList from "../pages/Backend/Order/OrderList";
import OrderCreate from "../pages/Backend/Order/OrderCreate";
import OrderUpdate from "../pages/Backend/Order/OrderUpdate";
import OrderShow from "../pages/Backend/Order/OrderShow";
import PostList from "../pages/Backend/Post/PostList";
import PostCreate from "../pages/Backend/Post/PostCreate";
import PostShow from "../pages/Backend/Post/PostShow";
import PostUpdate from "../pages/Backend/Post/PostUpdate";
import TopicList from "../pages/Backend/Topic/TopicList";
import TopicCreate from "../pages/Backend/Topic/TopicCreate";
import TopicUpdate from "../pages/Backend/Topic/TopicUpdate";
import TopicShow from "../pages/Backend/Topic/TopicShow";
import SliderList from "../pages/Backend/Slider/SliderList";
import SliderCreate from "../pages/Backend/Slider/SliderCreate";
import SliderUpdate from "../pages/Backend/Slider/SliderUpdate";
import SliderShow from "../pages/Backend/Slider/SliderShow";
import MenuList from "../pages/Backend/Menu/MenuList";


const RouterPrivate = [
    {path: '/admin', component:Dashboard},
    { path: "/admin/product", component:ProductList },
    { path: "/admin/product/create", component:ProductCreate },
    { path: "/admin/product/update/:id", component:ProductUpdate },
    { path: "/admin/product/show/:id", component:ProductShow},
    {path: '/admin/brand', component:BrandList},
    {path: '/admin/brand/create', component:BrandCreate},
    {path: '/admin/brand/update/:id', component:Brandupdate},
    {path: '/admin/brand/show/:id', component:BrandShow},
    {path: '/admin/category', component:Categorylist},
    {path: '/admin/category/create', component:CategoryCreate},
    {path: '/admin/category/update/:id', component:Categoryupdate},
    {path: '/admin/category/show/:id', component:CategoryShow},
    {path: '/admin/contact', component:ContactList},
    {path: '/admin/contact/create', component:ContactCreate},
    {path: '/admin/contact/show/:id', component:ContactShow},
    {path: '/admin/contact/update/:id', component:ContactUpdate},
    { path: "/admin/user", component:UserList },
    { path: "/admin/user/create", component:UserCreate },
    { path: "/admin/user/update/:id", component:UserUpdate },
    { path: "/admin/user/show/:id", component:UserShow},
    { path: "/admin/menu", component:MenuList },
    { path: "/admin/menu/create", component:MenuCreate },
    { path: "/admin/menu/update/:id", component:MenuUpdate },
    { path: "/admin/menu/show/:id", component:MenuShow},
    { path: "/admin/order", component:OrderList },
    { path: "/admin/order/create", component:OrderCreate },
    { path: "/admin/order/update/:id", component:OrderUpdate },
    { path: "/admin/order/show/:id", component:OrderShow},
    { path: "/admin/post", component:PostList },
    { path: "/admin/post/create", component:PostCreate },
    { path: "/admin/post/show/:id", component:PostShow },
    { path: "/admin/post/update/:id", component:PostUpdate},
    { path: "/admin/topic", component:TopicList },
    { path: "/admin/topic/create", component:TopicCreate },
    { path: "/admin/topic/update/:id", component:TopicUpdate },
    { path: "/admin/topic/show/:id", component:TopicShow},
    { path: "/admin/slider", component:SliderList },
    { path: "/admin/slider/create", component:SliderCreate },
    { path: "/admin/slider/update/:id", component:SliderUpdate },
    { path: "/admin/slider/show/:id", component:SliderShow},

];
export default RouterPrivate;