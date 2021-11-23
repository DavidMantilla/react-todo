import React from 'react';
import "../../css/App.css";
import { TodoContext } from '../Todocontext';

function Todoerror() {

  return (

  <div className="Todoerror">
     
       <label> Oops! ha habido un error</label>
       <img src="../g12.png" className="img"></img>
  </div>

  );
}

export {Todoerror};