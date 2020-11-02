import React from "react";
import logo from '../../assets/img/logo.png';
const HeaderComponent = () => {

    return(
        <div id="MainShope">
            <div className="TopHeader">
                <div className="Mlogo"><img src={logo}/></div>
                <div className="HeadrMenu">
                    <div className="MenuItem">כל הפונטים</div>
                    <div className="MenuItem"><a href="#">מבצעים</a></div>
                    <div className="MenuItem">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ל הפונטים
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">אלות

                                </a>
                                <a className="dropdown-item" href="#"> ופונטים שלנו </a>
                                <a className="dropdown-item" href="#"> פונטים שלנו </a>
                                <a className="dropdown-item" href="#">אלות

                                </a>
                                <a className="dropdown-item" href="#"> ופונטים שלנו </a>
                                <a className="dropdown-item" href="#"> פונטים שלנו </a>
                            </div>
                        </li>
                    </div>

                    <div className="MenuItem">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                שלנו
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">אלות
                                </a>
                                <a className="dropdown-item" href="#"> ופונטים שלנו </a>
                                <a className="dropdown-item" href="#"> פונטים שלנו </a>
                                <a className="dropdown-item" href="#">אלות
                                </a>
                                <a className="dropdown-item" href="#"> ופונטים שלנו </a>
                                <a className="dropdown-item" href="#"> פונטים שלנו </a>
                            </div>
                        </li>
                    </div>
                </div>
                <div className="HeadrIcons">
                    <ul>
                        <li><a href="#"><span className="material-icons">favorite</span></a></li>
                        <li><a href="#"><span className="material-icons">lock</span></a></li>
                        <li><a href="#"><span className="material-icons">person</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
