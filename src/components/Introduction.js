import { useEffect } from "react";
import Ball from "./Ball";

function Introduction() {

    return (
        <div id='header-intro' style={{display: 'flex', flexDirection: 'column'}}>
            <div>
                <h1 id='title'>Hi! I'm <span style={{color: 'red'}}>Victor Chiong</span> </h1>
            </div>
            <div style={{display:'flex', justifyContent: 'space-between', position: 'relative'}}>
                <div>
                    <span id='title-text'></span><span id='title-text-bar' className="type-eff">|</span>
                    <hr/>
                    <span style={{display: 'block'}}>I am a full stack developer based on Cebu, specializing on web applications.</span>
                </div>
                <div style={{position: 'absolute', width: '100vw', height: '100vh', zIndex: -5}}>
                    <Ball />
                </div>
            </div>
        </div>
    )
}

export default Introduction;