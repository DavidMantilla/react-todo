import React from "react";
import "../../css/App.css";

function Todoitem(props) {

  
  
  return (
    <li className={`Todoitem ${props.completed && 'Todoitem--completed'}`}>
      <div className="Todoitem--Container">
        <button className="Todoitem--btnchk"
        onClick={props.onComplete}>
          <span className="Todoitem--check fas fa-check" />
        </button>

        <p>{props.text}</p>
        <button className="Todoitem--btndlt"
         onClick={props.onDelete}>
          <span className="Todoitem--delete fas fa-trash"></span>
        </button>
      </div>
    </li>
  );
}

export { Todoitem };
