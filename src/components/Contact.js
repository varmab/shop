import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div class="container" style={{ marginTop: "50px" }}>
                <h1 class="mt-4 mb-3">Contact
                    <small> Our shop</small>
                </h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                </ol>
                <div class="row">
                    <div class="col-lg-8 mb-4">
                        <div class="mapouter">
                            <div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=vishakhapatnam&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by <a
                                    href="https://www.embedgooglemap.net">embedgooglemap.net</a></div>
                        </div>
                    </div>
                    <div class="col-lg-4 mb-4">
                        <h3>Contact Details</h3>
                        <p>
                            D.No: 49-52-11, Opp:HP Petrol Bunk,
                            <br />Sankarmatam Road, Santhipuram Jn
                            Visakhapatnam-530016
                            <br />
                        </p>
                        <p>
                            <abbr title="Phone">P</abbr>: +91 7337213134
                        </p>
                        <p>
                            <abbr title="Email">E</abbr>:
                            <a href="https://www.codingsastra.com/">codingsatra@gmail.com
                            </a>
                        </p>
                        <p>
                            <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mb-4">
                        <h3>Send us a Message</h3>
                        <form name="sentMessage" id="contactForm" novalidate>
                            <div class="control-group form-group">
                                <div class="controls">
                                    <label>Full Name:</label>
                                    <input type="text" class="form-control" id="name" required
                                        data-validation-required-message="Please enter your name." />
                                    <p class="help-block"></p>
                                </div>
                            </div>
                            <div class="control-group form-group">
                                <div class="controls">
                                    <label>Phone Number:</label>
                                    <input type="tel" class="form-control" id="phone" required
                                        data-validation-required-message="Please enter your phone number." />
                                </div>
                            </div>
                            <div class="control-group form-group">
                                <div class="controls">
                                    <label>Email Address:</label>
                                    <input type="email" class="form-control" id="email" required
                                        data-validation-required-message="Please enter your email address." />
                                </div>
                            </div>
                            <div class="control-group form-group">
                                <div class="controls">
                                    <label>Message:</label>
                                    <textarea rows="10" cols="100" class="form-control" id="message" required
                                        data-validation-required-message="Please enter your message" maxlength="999"
                                        style={{resize:"none"}}></textarea>
                                </div>
                            </div>
                            <div id="success"></div>
                            <button type="submit" class="btn btn-primary" id="sendMessageButton">Send Message</button>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

export default Contact;