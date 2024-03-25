import React from 'react'
import classes from './footer.module.css';
const Footer = () => {
    return (
        <div className={`${classes?.footer}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="text-center">
                            <h4 className={`${classes?.head}`}>Follow Me:</h4>
                            <ul className={`${classes?.list}`}>
                                <li>
                                    <a href="https://www.linkedin.com/in/thatipamula-venkatesh-a54830215/" target="_blank">
                                        <img className={`${classes?.icon}`} src="/footer/linkedin.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/THATIPAMULA10" target="_blank">
                                        <img className={`${classes?.icon}`} src="/footer/twitter.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
