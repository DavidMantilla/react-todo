
import React from 'react';
import "../../css/App.css";

function Todoadd(props){

  const onAdd=()=>{
    props.SetmodalOpen(prevState=> !prevState)
 
  };
  return (
<React.Fragment>

       <button className="Todoadd" onClick={onAdd}>+</button>
</React.Fragment>
 


  );
}

export {Todoadd};

