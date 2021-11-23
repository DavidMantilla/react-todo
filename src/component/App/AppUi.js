import React from "react";
import "../../css/App.css";
import { FormAdd } from "../formAdd";
import { Modal } from "../Modal";
import { Todoadd } from "../Todoadd/index.js";
import { TodoContext } from "../Todocontext";
import { Todocouter } from "../Todocounter/index.js";
import { Todoempty } from "../Todoempty";
import { Todoerror } from "../Todoerror";
import { Todoitem } from "../Todoitem/index.js";
import { Todolist } from "../Todolist/index.js";
import { Todoloading } from "../Todoloading";
import { Todosearch } from "../Todosearch/index.js";

 

function AppUi() {
 const  {todo,
    completado,
    srcvalue,
    setSrcValue,
    toggletarea,
    deletetarea,
    buscadas,
    loading,
    modalOpen,
    SetmodalOpen,
    error}=React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className="encabezado">
        <Todocouter />
       
        <Todosearch />
        <br />
      </div>

      
          <Todolist>
            {error && <p className="item"><Todoerror></Todoerror></p>}
            {loading && (
              <Todoloading/>
            )}
            {!loading && !buscadas.length && (
              <p className="item"><Todoempty></Todoempty></p>
            )}
            {buscadas.map((tarea) => (
              <Todoitem
                text={tarea.text}
                key={tarea.text}
                completed={tarea.completed}
                onComplete={() => {
                  toggletarea(tarea.text);
                }}
                onDelete={() => {
                  deletetarea(tarea.text);
                }}
              />
            ))}
          </Todolist>
     
     {modalOpen && (

       <Modal>
         <FormAdd/>
       </Modal>
     )
     }
      <Todoadd SetmodalOpen={SetmodalOpen}  modalOpen={modalOpen}/>
    </React.Fragment>
  );
}

export { AppUi };
