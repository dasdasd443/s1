import { useEffect, useState } from 'react';
import './Home.css';
function Home() {

    const area = 125;
    const [pattern, setPattern] = useState(1);
    const calcAng = (x1,x2, y1,y2) => {
        const dx = x2 - x1;
        const dy = y2 - y1;

        const theta = Math.atan2(dy,dx);
        console.log(`${dx} ${dy}`);
        return theta * 180/Math.PI;
    }

    function randNum(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    const genLine = (x1,x2, y1,y2) => {
        const line = document.createElement('hr');
        line.style.border = '1px solid white';
        line.style.position = 'absolute';
        line.style.width = '1px';

        const x = randNum(x1, x2);
        const y = randNum(y1, y2);
        const h = randNum(300, 500);
        line.style.left = `${x}px`;
        line.style.top = `${y}px`;

        line.style.height = `${h}px`;
        
        return line;
    }
    const alertFn = (e) => {
        const ms = document.querySelector('#cursor');
        
        const x = e.clientX;
        const y = e.clientY;

        const cY = window.innerHeight / 2;
        const cX = window.innerWidth / 2;

        ms.style.left = (x - area) + "px";
        ms.style.top = (y - area) + "px";

        const patterns = [
            {y1: y - area, y2: y + area},
            {y1: y, y2: y}
        ]

        const lineEl = [
            genLine(parseInt(x - area), parseInt(x + area), parseInt(patterns[pattern].y1), parseInt(patterns[pattern].y2)),
            // genLine(parseInt(x - area), parseInt(x + area), parseInt(patterns[pattern].y1), parseInt(patterns[pattern].y2)),
            // genLine(parseInt(x - area), parseInt(x + area), parseInt(patterns[pattern].y1), parseInt(patterns[pattern].y2)),
            // genLine(parseInt(x - area), parseInt(x + area), parseInt(y - area), parseInt(y + area)),
            // genLine(parseInt(x - area), parseInt(x + area), parseInt(y - area), parseInt(y + area)),
        ]

        setTimeout(() => {
            setPattern(randNum(0 , 1));
        }, 5000);

        setTimeout(() => {
            lineEl.forEach((el) => {
                const theta = calcAng(x , parseInt(el.style.left), y, parseInt(el.style.top));
                el.style.webkitTransform = `rotate(${theta}deg) translate(0, -100px)`;
                document.querySelector('#home-body').appendChild(el);
            });
        }, 50);
        
        
    }

    useEffect(() => {
        setInterval(() => {
            if(document.querySelector('#home-body').querySelectorAll("hr").length > 10) {
                document.querySelector('#home-body').querySelectorAll("hr")[0].remove();
                document.querySelector('#home-body').querySelectorAll("hr")[1].remove();
            }
        }, 5);
    },[]);

    return (
        <div id='home-body' onMouseMove={alertFn}>
            <div id='cursor'></div>
        </div>
    );
}

export default Home;