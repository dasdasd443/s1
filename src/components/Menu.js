import { useEffect, useState } from 'react';
import './Menu.css';

function Menu({offset}) {

    useEffect(() => {

        let animString = document.getElementById('home-menu').style.animation;
        if(offset === 0 && animString.includes("navAnimIn")) {
            document.getElementById('home-menu').style.animation = "navAnimOut .5s ease-out forwards";
        } else if(offset !== 0){
            document.getElementById('home-menu').style.animation = "navAnimIn .5s ease-out forwards";
        }
    },[offset]);
    return (
        <div id='home-menu-container' >
            <nav id='home-menu'>
                <section id='home-menu-header'>
                    <div style={{paddingLeft: '20px'}}>
                        <h1>Vittorio</h1>
                    </div>
                    <ul id='home-menu-nav' style={{paddingRight: '20px'}}>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </section>
                {/* <hr style={{width: '100%'}}/> */}
            </nav>
        </div>
    );
}

export default Menu;