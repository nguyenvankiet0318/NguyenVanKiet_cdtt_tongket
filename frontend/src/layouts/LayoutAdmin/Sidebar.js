import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary2 navbar-dark pe-3">
                <Link to="index.html" className="navbar-brand mx-0 mb-3">
                    <h3 className="text-primary2"><i className="fa fa-user-edit me-2"></i>Quản trị</h3>
                </Link>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src={require("../../assets/img/user.jpg")} alt="" style={{ width: '40px', height: '40px' }} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h7 className="mb-0">Jhon Doe</h7>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <Link to="index.html" className="nav-item nav-link2 active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                    <div className="nav-item dropdown">
                        <NavLink to="#" className="nav-link2 dropdown-toggle" data-bs-toggle="dropdown" as="a">
                            <i className="fa fa-laptop me-2"></i>Sản phẩm
                        </NavLink>
                        <div className="dropdown-menu bg-transparent border-0">
                            <NavLink to="/admin/brand" className="dropdown-item" as="a">Thương hiệu</NavLink>
                            <NavLink to="/admin/category" className="dropdown-item" as="a">Danh mục sản phẩm</NavLink>
                            <NavLink to="/admin/product" className="dropdown-item" as="a">Tất cả sản phẩm</NavLink>
                            <NavLink to="/admin/contact" className="dropdown-item" as="a">Liên hệ</NavLink>
                            <NavLink to="/admin/user" className="dropdown-item" as="a">Người dùng</NavLink>
                            <NavLink to="/admin/slider" className="dropdown-item" as="a">Slider</NavLink>
                            <NavLink to="/admin/menu" className="dropdown-item" as="a">Menu</NavLink>
                            <NavLink to="/admin/order" className="dropdown-item" as="a">Order</NavLink>
                            <NavLink to="/admin/post" className="dropdown-item" as="a">Post</NavLink>
                            <NavLink to="/admin/topic" className="dropdown-item" as="a">Topic</NavLink>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link2 dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/login" className="dropdown-item">Sign In</Link>
                            <Link to="/register" className="dropdown-item">Sign Up</Link>
                            <Link to="404.html" className="dropdown-item">404 Error</Link>
                            <Link to="blank.html" className="dropdown-item">Blank Page</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;