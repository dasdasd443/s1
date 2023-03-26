import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {

  const textArr = ['Software Engineer', 'Team Lead', 'Full Stack Developer', 'Web Developer'];
  let textIdx = 0;
  const typeEff = (text) => {
      const textEff = text.split('');
      const title = document.querySelector('#title-text');
      const titleTxt = document.querySelector('#title-text').textContent;
      if(titleTxt.length < textEff.length) {
          title.innerHTML = titleTxt + textEff[titleTxt.length];
      }
      
  }

  const removeEff = () => {
    const title = document.querySelector('#title-text');
    let titleTxt = document.querySelector('#title-text').textContent;
    title.innerHTML = titleTxt.slice(0,-1);
  }

  let intvFLg = true;
  let intvId = null;


  useEffect(() => {
      
    intvId = setInterval(() => {
      const titleTxt = document.querySelector('#title-text').textContent;
      const titleTxtBar = document.querySelector('#title-text-bar');
      titleTxtBar.className = '';
      
      if(titleTxt.length < textArr[textIdx].length && intvFLg) {
        typeEff(textArr[textIdx]);
      }

      if(!intvFLg) {
        removeEff()
      }

      if(titleTxt.length === textArr[textIdx].length || titleTxt.length === 0) {
        titleTxtBar.className = 'type-eff';
      }
      
      

      setTimeout(() => {
        if(titleTxt.length === textArr[textIdx].length) {
          intvFLg = false;
          
        }
        if(titleTxt.length === 0 && !intvFLg) {
          intvFLg = true;
          textIdx+= 1;
          if(textIdx === 4) textIdx = 0
        }
      }, 2000);

      
    },80);

    return () => clearInterval(intvId);
  },[typeEff, intvFLg]);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Home offset={offset}/>
  );
}

export default App;
