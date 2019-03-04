import React, { Component } from 'react';
import './nav-bar.css';

class NavBarComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(

            <div className='nav' style={{
                color: "green",
            }}>
                <ul className={"nav-menu"}>

                    <li className="">HOME</li>
                    <li className="">CONTACT US</li>
                    <li className="">TOPIC</li>
                    <li className="">About us</li>

                </ul>
            </div>
        )
    }
}

export default NavBarComponent;