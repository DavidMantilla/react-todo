import React, { useLayoutEffect } from 'react';
import "../../css/App.css";

function Todolist(props){
  return (
<section className="Todolist">

  <ul className="Todolist-ul">
    { props.children }
 </ul> 

</section>

  );
}

export {Todolist};
