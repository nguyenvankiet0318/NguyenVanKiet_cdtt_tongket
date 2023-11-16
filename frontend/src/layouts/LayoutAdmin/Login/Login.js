import { useState } from "react";
import userservices from "../../../services/UserServices";
import React from 'react';
// import "./main.css";
// import "./bootstrap.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(event) {
    event.preventDefault();

    var user = new FormData();
    user.append("email", email);
    user.append("password", password);

    await userservices.login(email, password).then(function (res) {
      alert(res.data.message)
      if (res.data.success) {
        window.location.href = 'http://localhost:3000/admin';
      } else {
        window.location.reload();
      }
    })
  }

  return (
    <div className="login-wrapper">
      {/* <!-- Sign In Start --> */}
      <form onSubmit={login} className="main-bootstrap-styles">
        <div className="container-fluid">
          <div className="row h-100 align-items-center justify-content-center" style={{ marginRight: '1em' }}>
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3" >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <a href="/" className="">
                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>Đăng nhập</h3>
                  </a>
                  <h3>Sign In</h3>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                  </div>
                  <a href="">Forgot Password</a>
                </div>
                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign In</button>
                <p className="text-center mb-0">Don't have an Account? <a href="/register">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* <!-- Sign In End --> */}
    </div>
  );
}

export default Login;