
// import "./assets/sass/style.scss"
// import "./assets/sass/app.scss"

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite"
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterSite from "./router";
import Login from "./layouts/LayoutAdmin/Login/Login";
import Register from "./layouts/LayoutAdmin/Login/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutSite />}> 
        {RouterSite.RouterPublic.map(function(route,index){
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page/>} />
        })}
      </Route>
      <Route path="/" element={<LayoutAdmin />}> 
        {RouterSite.RouterPrivate.map(function(route,index){
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page/>} />
        })}
      </Route>
      <Route path="login" element={<Login />}/> 
      <Route path="register" element={<Register />}/> 

    </Routes>
  </BrowserRouter>
  );
}

export default App;
