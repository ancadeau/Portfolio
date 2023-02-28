import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import C_logo from "../../Assets/icons8-c-programming-48.png";
import Python_logo from "../../Assets/icons8-python-48.png";
import Unity_logo from "../../Assets/icons8-unity-50.png";
import {SiC,} from "react-icons/si";
import pData from "./project_details.json"
import Button from "react-bootstrap/Button";
import { BsGithub, BsPersonFill } from "react-icons/bs";
import { TbPresentation, TbSchool } from "react-icons/tb";
import IconButton from '@mui/material/IconButton';
import { SiUnity } from "react-icons/si";

class ProjectTimeline extends Component {
  render() {


    var projectsData = pData.projects.map((project) => {

      // technologies
      var technologies = project.technologies.map((tech) => {
        var techIcon = function () {
          switch (tech.icon) {
            case "C":
              return <img src={C_logo} alt="C" width="30em"/>;
            case "Python":
              return <img src={Python_logo} alt="Python" width="30em"/>;
            case "Unity":
              return <img src={Unity_logo} alt="Unity" width="30em"/>;
            default:
              return <img src={C_logo} alt="C" width="30em"/>;
          };
        };
        const techSubject = <strong style={{color:"white"}}>{tech.subject}</strong>;
        return (
          <Chip icon={techIcon()}  label={techSubject}/>
        );
      });

      // project details
      const title = project.title;
      var personnalProject = function () {
        if (project.personnal) {
          return (
            <BsPersonFill />
          )
        }
        else {
          return (
            <TbSchool />
          )
        }
      }
      const date = project.date;
      // var descriptionButton = function () {
      //   const [open, setOpen] = React.useState(false);

      //   const handleClick = () => {
      //     setOpen(!open);
      //   };

      //   var description = project.description.map((desc) => {
      //     return (
      //       <p>{desc}</p>
      //     )
      //   });
      //   return (
      //     <div className='descriptionButton'>
      //       {open ? (
      //         <div>
      //           <IconButton onClick={handleClick}>
      //             <BsGithub />
      //           </IconButton>
      //           {description}
      //         </div>
      //       ) : (
      //         <IconButton onClick={handleClick}>
      //           <BsGithub />
      //         </IconButton>
      //       )}
      //     </div>
      //   )
      // }

      var description = project.description.map((desc) => {
        return (
          <p>{desc}</p>
        )
      });

      var linkButtons = project.links.map((link) => {
        switch (link.name) {
          case "Github":
            return (
              <Button variant="outline-primary" href={link.url}>
                <BsGithub /> Github
              </Button>
            );
          case "PowerPoint":
            return (
              <Button variant="outline-primary" href={link.url}>
                <TbPresentation /> Presentation
              </Button>
            );
          default:
            return (
              <Button variant="outline-primary" href={link.url}>
                <BsGithub /> Github
              </Button>
            );
        }
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#9630be", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1b1b1b" }}
          date={date}
          iconStyle={{ background: "#9630be", color: "#fff" }}
          icon={personnalProject()}
        >
          {technologies}
          <br />
          <br />
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <br />
          {description}
          <br />
          {linkButtons}
        </VerticalTimelineElement>
      );
    });

    return (
      <div>
        <VerticalTimeline>
          {projectsData}
        </VerticalTimeline>
      </div>
    );

  }
}

export default ProjectTimeline;