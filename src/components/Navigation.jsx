
import React from 'react';
import { Link } from "react-router-dom";
import LogoImage from "../img/logo.png";
import Heart from "../img/heart.png";



const Navigation =() =>
{

return (

<nav>
<div className="nav_container">  
<Link to ="/">
<img src={LogoImage} alt="Logo" width="200px"/>
</Link>
<div className="titles_nav">
    <Link to ="/" className="home_nav">HOME </Link>
    <Link to ="/favorites" className="contact_nav">FAVORITES</Link>
    </div>
    <Link className="link_mail" to="/favorites">
    <img className="mail_mobile" src={Heart} alt="mail" width="50px"/>
    </Link>

</div>
</nav>
)
}

export default Navigation; 