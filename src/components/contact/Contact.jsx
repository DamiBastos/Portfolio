import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import linkedIn from "../../img/linkedin.png";
import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import { useRef } from "react";
import { useState } from "react";
import  emailjs  from "emailjs-com";
import { ThemeContext } from "../../context.js";
import { useContext } from "react";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState (false);

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_mwacbhc",
                "template_96fs4gd",
                formRef.current,
                "VjaCwaTCOsUjpKwLn"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
        <div className="c">
        <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact Me
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt="" 
                                className="c-icon" 
                            />
                            +54 11 7019-0832
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email} 
                                alt="" 
                                className="c-icon" 
                            />
                            damian.bastos@yahoo.com
                        </div>
                        <div >
                            <a className="c-info-item" title="linkedIn" href="https://www.linkedin.com/in/damianbastos3">
                            <img 
                                src={linkedIn} 
                                alt="" 
                                className="c-icon" 
                            />
                            https://www.linkedin.com/in/damianbastos3
                            </a>
                        </div>
                        <div >
                            <a className="c-info-item" title="github" href='https://github.com/DamiBastos'>
                            <img 
                                src={github} 
                                alt="" 
                                className="c-icon" 
                            />
                            https://github.com/DamiBastos
                            </a>
                        </div>
                        <div >
                            <a className="c-info-item" title="twitter" href='https://twitter.com/DamianBastos3'>
                            <img 
                                src={twitter} 
                                alt="" 
                                className="c-icon" 
                            />
                            https://twitter.com/DamianBastos3
                            </a>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                  <p className="c-desc">
                      <b>
                        Escribeme
                      </b> Dime algo!
                      </p>  
                      <form ref={formRef} onSubmit={handleSubmit}>
                          <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                          <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                          <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                          <textarea style= {{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                          <button>Submit</button>
                            {done && "Thanks for your message!"}
                      </form>
                    </div>    
        </div>
        </div>
      );
}

export default Contact;