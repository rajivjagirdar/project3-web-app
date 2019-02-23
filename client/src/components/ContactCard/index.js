import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import linkedinpic from "./images/linkedin.png"
import githubpic from "./images/github.png"

const picStyle = {
  height: "45%",
  width: "30%",
  justify: "Center"
}

function ContactCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <h3><strong>{props.name}</strong></h3>
            <a href={props.about}>
            <img style= {picStyle} src = {linkedinpic}/>
            </a>
            <a href={props.github}>
           <img style= {picStyle} src = {githubpic}/>
            </a>
            </div>
    </div>
  );
}

export default ContactCard;