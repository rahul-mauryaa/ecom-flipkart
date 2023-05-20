import React from "react";
import { Link } from "react-router-dom";

import './Login.css'

const Login = () => {


    return (
        <>
            <div className="card  justify-content-center width">
                <div className="row">
                    <div className="col-md-4 bg-primary position-relative">
                        <h5 className="text-light m-1 mb-4 mt-4">Loing</h5>
                        <p className="text-light m-1">Get access to your Orders, Wishlist and Recommendations</p>
                        <img src="./img/login_img_c4a81e.png" className="position-absolute bottom-0 m-4" alt="none" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column gap-5" >
                            <input type="text" className="form-control border-0" placeholder="Enter Email/Mobile number" aria-label="Username" aria-describedby="addon-wrapping" />
                            <input type="password" className="form-control border-0" placeholder="Enter password" aria-label="Username" aria-describedby="addon-wrapping" />
                            <button type="button" className="btn btnColer">Loing</button>
                            <Link to='/create'>

                                <p className='text-primary text-center cursor'>New to Flipkart? Create an account</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;