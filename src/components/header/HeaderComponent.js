import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from '../../assets/img/logo.png';
const HeaderComponent = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    return(
        <div id="MainShope">
            <div className="TopHeader">
                <div className="Mlogo"><img src={logo}/></div>
                <div className="HeadrMenu">
                    <div className="MenuItem">כל הפונטים</div>
                    <div className="MenuItem"><a href="#">מבצעים</a></div>
                    <div className="MenuItem">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle  caret nav  >
                                ל הפונטים
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >אלות</DropdownItem>
                                <DropdownItem >ופונטים שלנו</DropdownItem>
                                <DropdownItem>פונטים שלנו</DropdownItem>
                                <DropdownItem>אלות</DropdownItem>
                                <DropdownItem>ופונטים שלנו</DropdownItem>
                                <DropdownItem>פונטים שלנו</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div className="MenuItem">
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle  caret nav >
                                שלנו
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem >אלות</DropdownItem>
                                <DropdownItem >ופונטים שלנו</DropdownItem>
                                <DropdownItem>פונטים שלנו</DropdownItem>
                                <DropdownItem>אלות</DropdownItem>
                                <DropdownItem>ופונטים שלנו</DropdownItem>
                                <DropdownItem>פונטים שלנו</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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
