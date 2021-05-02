import React from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'
// import{ init } from 'emailjs-com';
// init("user_hGBy7bx5ABdRt02f4KRwh");

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_8c7u44j', 'template_4v63ud6', e.target, 'user_hGBy7bx5ABdRt02f4KRwh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

    }

    return (
        <div className="mb-5 mt-5 pt-5">
           <div className="contact">
           <h1 className="lorem">Want to contact with me</h1>
            <h3 className="lorem">Say Hello! 😍</h3>
           </div>
            <div>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control input" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control input" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control input" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control input" id="" cols="30" rows="8" placeholder="Your message" name="message"/>
                        </div>
                        <div className="col-8 pt-2 mx-auto justify-content-center">
                            <input type="submit" className="btn btn-info" value="send message"/>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;