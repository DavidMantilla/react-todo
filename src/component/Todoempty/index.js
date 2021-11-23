import React from 'react';
import "../../css/App.css";
import { TodoContext } from '../Todocontext';

function Todoempty() {

  return (

  <div className="Todoempty">
     
       <p >No tienes tareas</p>
       <label> Crea una nueva Tarea</label>
       <img src="../addnew.png" className="img"></img>
  </div>

  );
}

export {Todoempty};