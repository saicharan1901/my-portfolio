import react from "react";
import projects from "./list";
import Card from "./projects";
import "./projects.css"

function createCard(projects) {
    return (
      <Card
        name={projects.name}
        description={projects.description}
        vlink={projects.vlink}
        glink={projects.glink}
      />
    );
  }
 


  function Dash() {
    return (

        <div>
            <center><h1 className="headingp">My projects </h1></center>
            <div className="dashboard">
                <center>
                    <div>
                        {projects.map(createCard)} 
                    </div>
                </center>
            </div>
        </div>

    );
  }

export default Dash;