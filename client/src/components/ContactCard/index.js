import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ContactCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
            <h3><strong>{props.name}</strong></h3>
            <br></br>
            <Link to={props.about}>
                      <strong>
                        Check out my LinkedIn
                      </strong>
                    </Link>

      </div>
    </div>
  );
}

export default ContactCard;