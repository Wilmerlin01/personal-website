import React, {useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';


function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wilmerl', 'template_wilmerl', form.current, 'TOorj28gUzk4dLRCQ')
          .then((result) => {
              console.log(result.text);
              setFormSubmitted(true);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className='page-container'>
            <header className='page-header'>
                <h1 className='title'>
                    Contact
                </h1>
                <p className='title-description'>
                    Please fill out the form below to inquire about work, a project, or to simply say hello.
                    Alternatively, you can also reach me at wilmerl@uci.edu.
                </p>    
            </header>
            <div className='form-container'>
                {formSubmitted ? (
                <div className='form-sent'>
                    Thank you!
                </div>
                ) : (
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='form-input'>
                        <label htmlFor="field1">Name *</label>
                        <input 
                            type='text' 
                            name='from_name' 
                            data-validate='required,Generic' 
                            placeholder='Your Name...' 
                            required>
                        </input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor="field2">Email Address *</label>
                        <input 
                            type='text' 
                            name='email' 
                            data-validate='required,Emial,required' 
                            placeholder='Your Email Address...' 
                            required>
                        </input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor="field3">Message *</label>
                        <textarea type='text' 
                            name='message' 
                            data-validate='required,Generic' 
                            placeholder='Your Message...' 
                            required>
                        </textarea>
                    </div>
                    <div className='submit-button'>
                        <button type='submit' className='submit-button'>
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
                )}
            </div>
        </div>
    )
}

export default Contact;