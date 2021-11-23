import React from "react";
import "../../css/App.css";
import { TodoContext } from "../Todocontext";

function Todocouter() {
  const { todo: total, completado: completed } = React.useContext(TodoContext);
  return (
    <div className="header">
      <h1 className="header-title">
        {" "}
        Lista de Tareas
        <span className="fa fa-tasks header-title-icon"></span>
      </h1>
      <h4 className="TodoCounter">
        has completado {completed} tareas de {total}{" "}
      </h4>
    </div>
  );
}

export { Todocouter };
