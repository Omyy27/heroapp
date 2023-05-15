// import React from 'react';
import { FiBell } from "react-icons/fi";
import { HiCog } from "react-icons/hi";


const Header = () => {
    return (
        <nav className="navbar bg-transparent navbar-marvel py-0">
            <div className="container-fluid px-5 h-100">
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-start h-100 gap-3">
                    <span className="logo-marvel">LOGO MARVEL</span>
                    <div className="d-flex flex-row flex-wrap align-items-center gap-3 h-100">
                        <div className="header-item d-flex flex-row flex-wrap align-items-center justify-content-center">
                            <span>
                                HOME
                            </span>
                        </div>
                        <div className="header-item d-flex flex-row flex-wrap align-items-center justify-content-center">
                            <span>
                                PERSONAJES
                            </span>
                        </div>
                    </div>
                </div>

                <div className="header-tool-zone d-flex flex-row flex-wrap align-items-center gap-3">
                    <div className="header-tool-item">
                        <FiBell />
                    </div>
                    <div className="header-tool-item">
                        <HiCog />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;