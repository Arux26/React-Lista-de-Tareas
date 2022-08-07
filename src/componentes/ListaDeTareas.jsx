import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../stylesheets/ListaDeTareas.css";



function ListaDeTareas(){

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){ /*para verificar que la tarea no este en blanco es decir que el string no este vacio*/
      tarea.texto = tarea.texto.trim(); /*trim() nos permite quitar los espacios del principio o final de un string*/
      const tareasActualizadas = [tarea, ...tareas]; /* generamos un arreglo con la tarea nueva al principio y luego las otras tareas con el spread operator */
      setTareas(tareasActualizadas); /*actualizamos el estado*/
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />  
          )
        }
      </div>
    </>
  )
}


export default ListaDeTareas;
