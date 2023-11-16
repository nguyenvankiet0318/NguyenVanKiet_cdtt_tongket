import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import Sidebar from "./Sidebar";

function LayoutAdmin() {
    return (
        <>
            {/* <Header/> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        <div className="bg-secondary rounded p-3">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </> 
    );
}

export default LayoutAdmin;