import { useEffect, useState } from 'react';
import Header from './Header';

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
        line.style.border = '1px solid rgba(255,255,255,0.1)';
        line.style.position = 'absolute';
        line.style.width = '1px';
        line.style.overflow = 'none';
        line.style.zIndex = '100';
        line.className = 'rand-line';

        const x = randNum(x1, x2);
        const y = randNum(y1, y2);
        const h = randNum(100, 300);
        line.style.left = `${x}px`;
        line.style.top = `${y}px`;

        line.style.height = `${h}px`;
        
        return line;
    }

    const [mousePos, setMousePos] = useState({x: 0, y: 0});


    const getMousePos = (e) => {
        setMousePos({x: e.clientX, y: e.clientY});

        const ms = document.querySelector('#cursor');
        const hb = document.querySelector('#home-body');
        const rect = hb.getBoundingClientRect();

        const offset = {
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX
        }
        const x = e.pageX - offset.left ;
        const y = e.pageY - offset.top;

        ms.style.left = (mousePos.x - rect.left) + "px";
        ms.style.top = (mousePos.y - rect.top) + "px";
    }

    const alertFn = () => {

        const patterns = [
            {y1: mousePos.y - area, y2: mousePos.y + area},
            {y1: mousePos.y, y2: mousePos.y}
        ]

        setTimeout(() => {
            setPattern(randNum(0 , 1));
        }, 1000);

        const lineEl = [
            genLine(parseInt(mousePos.x - area), parseInt(mousePos.x + area), parseInt(patterns[pattern].y1), parseInt(patterns[pattern].y2)),
        ]

        lineEl.forEach((el) => {
            const theta = calcAng(mousePos.x , parseInt(el.style.left), mousePos.y, parseInt(el.style.top));
            el.style.webkitTransform = `rotate(${theta}deg) translate(0, -100px)`;
            document.querySelector('body').appendChild(el);
        });

        setTimeout(() => {
            // document.querySelector('#home-body').querySelectorAll("hr")[0].remove();
        }, 2000);
        
        
    }
    

    return (
        <>
        <div id='home-body' onMouseMove={e => {
            getMousePos(e);
            alertFn();
        }}>
            <div id='cursor'></div>
            <Header />
            <div id='home-content'></div>
            <div id='home-about'></div>
        </div>
        </>
    );
}

export default Home;