import '../../../layouts/layoutSite/HeaderStyle.css'
function Contact() {
    return (
        <section className="contact">
            <h1 className="text-center pt-3">Liên Hệ Với Chúng Tôi</h1>
            <br></br>
            {/* <h5>
                "Sự hài lòng của bạn rất quan trọng đối với chúng tôi! Để được hỗ trợ
                ngay lập tức và xử lý nhanh yêu cầu của bạn, chúng tôi khuyên bạn nên
                liên hệ với Đại lý Kawasaki ủy quyền tại địa phương. Đại lý của bạn có
                thể giúp bạn với tính sẵn có của sản phẩm và giá cả (xe và phụ tùng),
                yêu cầu bảo trì và kỹ thuật, và bảo hành."
            </h5> */}
            <br></br>
            <h5>
              Để đóng góp ý kiến và yêu cầu cải thiện chất lượng dịch vụ vui lòng liên hệ theo thông tin dưới đây
            </h5>
            <div className="maincontent">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-3 bg-red">
                            <div className="product-item">
                                <h4>Điện thoại</h4>
                                <p>03662319**</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 bg-red">
                            <div className="product-item">
                                <h4>Liên hệ</h4>
                                <p>
                                    + Phòng 08 đường số 6,đường 61, Phước Long B, Thủ Đức
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 bg-red">
                            <div className="product-item">
                                <h4>Email</h4> <p>  + địa chỉ email: vankiet.1576@gmail.com tiếp nhận từ Thứ 2 đến thứ 6 hàng tuần</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    {" "}
                    <div className="goolemap">
                        <iframe
                            id='map'
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31351.447944597792!2d106.76370870910648!3d10.816592963324657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752701a34a5d5f%3A0x30056b2fdf668565!2sHo%20Chi%20Minh%20City%20College%20of%20Industry%20and%20Trade!5e0!3m2!1sen!2s!4v1684841846289!5m2!1sen!2s"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="col-6 border">
                    <h4 className="text-center mt-3">Liên hệ với chúng tôi</h4>
                    <form>
                        <div class="mb-3">
                            <label for="fullname" class="form-label">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="fullname"
                                aria-describedby="fullname"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="phonenumber" class="form-label">
                                Số điện thoại
                            </label>
                            <input
                                type="number"
                                class="form-control"
                                id=""
                                aria-describedby="phone"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="address"
                                aria-describedby="address"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="Email1" class="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="Email"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="Password"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;