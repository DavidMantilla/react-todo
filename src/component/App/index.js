// import logo from './logo.svg';
import "../../css/App.css";
import React from "react";
import { AppUi } from "./AppUi";

import { TodoProvider } from '../Todocontext';



function App() {
  

  return (
   <TodoProvider>

     <AppUi/>

   </TodoProvider>

  );
}


export default App;
