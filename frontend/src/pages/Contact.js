import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import contactservice from "../services/ContactServices";

function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');



    async function report(event) {
        event.preventDefault();

        var contact = new FormData();
        contact.append("name", name);
        contact.append("email", email);
        contact.append("content", content);


        await contactservice.report(name, email, content).then(function (res) {

            alert(res.data.message);
        })
    }

  return (
    <>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415639.1329666667!2d105.31875698525021!3d21.02851147723286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb3e002a245%3A0x9e4f3a3330e9146c!2zVmlldCBuYW0gVGjDuiBOZ3V54buFbiBUaMOhbmcgVGjDtG5n!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd" height="500" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
        {/* <!-- Contact Section Begin --> */}
        <section class="contact spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="contact__text">
                            <div class="section-title">
                                <span>Information</span>
                                <h2>Contact Us</h2>
                                <p>As you might expect of a company that began as a high-end interiors contractor, we pay
                                    strict attention.</p>
                            </div>
                            <ul>
                                <li>
                                    <h4>Vietnam</h4>
                                    <p>195 Dinh Phong Phu, Thu Duc, Ho Chi Minh <br />+84 366231912</p>
                                </li>
                                <li>
                                    <h4>France</h4>
                                    <p>109 Avenue Léon, 63 Clermont-Ferrand <br />+12 345-423-9893</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div className="contact__form">
                            <form onSubmit={report}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
                                        <button type="submit" className="site-btn">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Contact Section End --> */}
        </>
  )
}
export default Contact;
