import React from 'react'
import classes from './contact.module.css'
const Contact = () => {
    return (
        <section id="contact" className={`${classes?.CotSection}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <h2 className={`${classes?.heading}`}>Contact Me</h2>
                        <div className={`${classes?.line}`}></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className={`${classes?.form_body}`}>
                        <div className={`${classes?.form}`}>
                            <div>
                                <input className={`${classes?.input}`} type="text" placeholder='Name*' />
                            </div>
                            <div>
                                <input className={`${classes?.input}`} type="email" name="" id="" placeholder='Email Id*' />
                            </div>
                            <div>
                                <textarea className={`${classes?.textarea}`} name="" id="" cols="30" rows="10" placeholder='Message*'></textarea>
                            </div>
                            <div>
                                <button className={`${classes?.button}`}>Submit</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
