import { useEffect } from "react";
import Project1 from '../images/projects/project1.png';
import Project2 from '../images/projects/project2.png';

function Projects({offset}) {

    const offsetThresold = 300;

    useEffect(() => {
        let animString = document.getElementById('home-projects').style.animation;
        if(offset > offsetThresold) {
            document.getElementById('home-projects').style.animation = "fadeIn .5s ease-out forwards";
        } else if(offset <= offsetThresold){
            document.getElementById('home-projects').style.animation = "fadeOut .5s ease-out forwards";
        }
    },[offset]);

    return (
        <div id='home-projects'>
            <section id='home-projects-intro-text'>
                <h1>Projects</h1>
                <p>Personal and practice projects made for fun, Work projects made for production</p>
            </section>
            <section id='home-projects-intro-projects'>
                <img className="img-card" src={Project1}/>
                <img className="img-card" src={Project2}/>
            </section>
        </div>
    )
}

export default Projects;