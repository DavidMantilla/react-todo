import React from 'react';
import "../../css/App.css";
import { TodoContext } from '../Todocontext';

function Todosearch() {
  const { srcvalue:value, setSrcValue:setValue} = React.useContext(TodoContext);
 const onBuscar=(event)=>{
setValue(event.target.value);
console.log(event.target.value);
  };
  return (<div className="Todosearch">

<input type="text" className="Todosearch--input" placeholder="hola" onChange={onBuscar} value={value}></input>
<span  className="todosearch--icon fa fa-search"></span>
</div>


  );
}

export {Todosearch};
