import AboutMe from "./homepage/AboutMe";
import Projects from "./homepage/Project";
import Contacts from "./homepage/Contact";
import { useState, useEffect } from "react";

function Main(){
    //const [projectInfo, setProjectInfo] = useState();
    let projectInfo = 123;
    useEffect(()=>{
        fetch('info/project.json')
            .then(response=> {projectInfo = response.json();
            console.log(projectInfo)});
    });
    return (
        <>
            <AboutMe />
            {/* <Projects /> */}
            <Contacts />
        </>
    );
}

export default Main;