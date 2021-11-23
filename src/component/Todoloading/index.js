import React from 'react';
import "../../css/App.css";
import { TodoContext } from '../Todocontext';

function Todoloading() {

  return (

  <div className="load">
      <span id="spn1" className=" fas fa-circle"></span>
      <span id="spn2" className="fas fa-circle"></span>
      <span id="spn3" className="fas fa-circle"></span>
      <span id="spn4" className="fas fa-circle"></span>
  </div>

  );
}

export {Todoloading};