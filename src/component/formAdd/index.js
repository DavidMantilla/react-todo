// import logo from './logo.svg';
import "../../css/form.css";
import React from "react";
import { TodoContext } from "../Todocontext";



function FormAdd() {
  const [error, setError]= React.useState("");
const [Nuevo, setNuevo]= React.useState("");
const onchange=(event)=>{
  setNuevo(event.target.value);
  console.log(event.target.value);
  setError("");
    };


  const { nuevaTarea,SetmodalOpen}=React.useContext(TodoContext);

  const onSubmit=()=>{
    if (Nuevo.length>0){
      nuevaTarea(Nuevo);
      SetmodalOpen(false);

    }else{
    
      setError("no has escrito nada");
    }

  }

  const onCancel=()=>{

    SetmodalOpen(false);

    
  }

  return (
<div className="modalContent">
<form action=""><label for="">Añada nota</label>
<br/>
<label className="lblerror">{Nuevo.length==0 && (error)} </label>
<br/>
<textarea name="note" id="note" cols="30" rows="10" placeholder="agregue su nota" className={(Nuevo.length==0 && error.length!=0)&& ("error")} onChange={onchange}></textarea>
<div className="form-group">
  <button id="add"  type="button" className="buttonAcep" onClick={onSubmit}> Añadir</button>
  <button id="cancel" type="button"  className="buttonCancel" onClick={onCancel}>Cancelar</button>
  
</div>
</form>
</div>
  );
}


export {FormAdd};
