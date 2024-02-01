import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Token_remove } from '../Redux/AuthSlice'

export default function Header() {
    const{isToggle}=useSelector((state)=>state.Auth)
    const dispatch = useDispatch()
    const remove = () => {
        dispatch(Token_remove())
       
        
    }
    
    return (
        <>
            {/* ? Preloader Start */}
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Preloader Start */}
            <header>
                {/*? Header Start */}
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                {/* Logo */}
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a >

                                            <Link to="/">
                                                <img src="assets/img/logo/logo.png" alt="" />
                                            </Link>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        {/* Main-menu */}
                                        <div className="main-menu f-right d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services">Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/dashboard`}>Dashboard</Link>
                                                    </li>


                                                    <li>
                                                        <Link to="/blog">Blog</Link>
                                                        
                                                    </li>

                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                            {isToggle ? (
                                                <button className="btn" type="submit">
                                                    <Link to="/login" onClick={() => remove()}>Logout</Link>
                                                </button>
                                            ) : (
                                                <button className="btn" type="submit">
                                                    <Link to="/login">Login</Link>
                                                </button>
                                            )}
                                        </div>

                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        </>

    )
}
