import React from "react";
import HeaderLogo from "../images/marvel_logo.jpg"

const Header = () => {
    return (
        <div className="header">
            <img className="header_logo" src={HeaderLogo} alt="marvel_logo"></img>
        </div>
    )
}

export default Header;