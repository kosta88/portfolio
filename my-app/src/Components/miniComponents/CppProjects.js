import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";


class CppProjects extends Component{
    constructor(props) {
        super(props);
    
        this.mvcVessel = () => {
          window.location.assign(
            "https://github.com/kosta88/MVC_VesselSimulation"
          );
        };
    }
    render(){
        return(
            <div>
            {/* Store-Procedure */}
            <Card shadow={5} className="project-item">
              <CardTitle
                style={{
                  color: "#333",
                  height: "180px",
                  background: "url(images/store-procedure.png) center / cover",
                }}
              >
                MVC Vessel Simulation
              </CardTitle>
              <CardText style={{ textAlign: "justify" }}>
                This is ......................
              </CardText>
              <CardActions border>
                <Button style={{ margin: "0 10px" }} raised ripple primary>
                  <i className="fa fa-github" aria-hidden="true" /> Github
                </Button>
                <Button raised accent ripple style={{ margin: "0 10px" }}>
                  <i className="fa fa-desktop" aria-hidden="true" /> Live Demo
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
    }
}

export default CppProjects;