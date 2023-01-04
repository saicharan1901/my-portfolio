import React from "react";
import projects from "./list";
import "./projects.css"


export default function Card(props){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div className="project" onClick={props.vlink}>
                <h2 className="projectname">{props.name}</h2>
                <p>{props.description}</p>
                <a href={props.glink}><input type= "button" value = "Github" className="button"/></a> &nbsp; <a href={props.vlink}><input type= "button" value = "Demo" className="button" /></a>

        </div>
    )

}
