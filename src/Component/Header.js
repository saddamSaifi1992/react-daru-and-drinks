import React from 'react'
import { Link   } from "react-router-dom";
export default function Header() {
    return (
        <>  
            <div id="sticky-wrapper" className="sticky-wrapper">
                <header className="site-navbar js-sticky-header site-navbar-target" role="banner" > 
                    <div className="container">
                        <div className="row align-items-center position-relative">
                        <div className="site-logo">
                            <a href="/" className="text-black">
                                <span className="text-primary"> Daru & Drinks </span>
                            </a>
                        </div>

                        <div className="col-12">
                            <nav className="site-navigation text-right ml-auto "> 
                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li>
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/random" className="nav-link">Random </Link>
                                    </li>
                                    <li>
                                        <Link to="/category" className="nav-link">Category</Link>
                                    </li> 
                                    <li>
                                        <Link to="/alphabet" className="nav-link">Drinks by Alphabet</Link>
                                    </li> 
                                </ul>
                            </nav> 
                        </div>

                        <div className="toggle-button d-inline-block d-lg-none">
                            <Link to="/category" className="site-menu-toggle py-5 js-menu-toggle text-black">
                            <span className="icon-menu h3"></span>
                            </Link>
                        </div> 
                    </div>
                    </div> 
                </header>
            </div>
            
        </>
    )
}
