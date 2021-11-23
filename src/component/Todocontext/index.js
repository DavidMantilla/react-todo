import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: tareas,
    guardarItem: guardarTarea,
    error,
    loading,
  } = useLocalStorage("V1_TAREAS", []);
  const [srcvalue, setSrcValue] = React.useState("");
  const [modalOpen, SetmodalOpen] = React.useState(false);
  const completado = tareas.filter((tarea) => tarea.completed).length;
  let buscadas = [];
  const todo = tareas.length;

  if (srcvalue.length <= 1) {
    buscadas = tareas;
  } else {
    buscadas = tareas.filter((tarea) => {
      let tareaText = tarea.text.toLowerCase();
      let buscado = srcvalue.toLowerCase();
      return tareaText.includes(buscado);
    });
  }

  const toggletarea = (text) => {
    const tareaindex = tareas.findIndex((tarea) => tarea.text === text);
    const nuevoItem = [...tareas];
    nuevoItem[tareaindex].completed = !nuevoItem[tareaindex].completed;
    guardarTarea(nuevoItem);
  };

  const deletetarea = (text) => {
    const tareaindex = tareas.findIndex((tarea) => tarea.text === text);
    const nuevoItem = [...tareas];
    nuevoItem.splice(tareaindex, 1);
    guardarTarea(nuevoItem);
  };

  const nuevaTarea = (text) => {
  
    const nuevoItem = [...tareas];
    nuevoItem.push({
      completed : false,
      text
    });
    guardarTarea(nuevoItem);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        completado,
        srcvalue,
        setSrcValue,
        toggletarea,
        deletetarea,
        buscadas,
        loading,
        error,
        modalOpen,
        SetmodalOpen,
        nuevaTarea
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
