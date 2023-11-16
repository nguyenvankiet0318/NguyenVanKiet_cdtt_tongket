import { useState } from "react";
import userservices from "../../../services/UserServices";
import React from 'react';
import { useNavigate } from "react-router-dom";
// import "./main.css";
// import "./bootstrap.css";

function Register() {
    const navigate = useNavigate(); // chuyen trang
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    async function register(event) {
        event.preventDefault();

        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("password", password);


        await userservices.register(name, email, password).then(function (res) {

            alert(res.data.message);
            navigate('/admin', { replace: true });
        })
    }
    return (
        <form onSubmit={register}>
            <div class="container-fluid">
                <div class="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                        <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <a href="/" class="">
                                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Đăng Ký</h3>
                                </a>
                                <h3>Sign Up</h3>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingText" placeholder="jhondoe" onChange={(e) => setName(e.target.value)} />
                                <label for="floatingText">Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-4">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <a href="">Forgot Password</a>
                            </div>
                            <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                            <p class="text-center mb-0">Already have an Account? <a href="/login">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Register;