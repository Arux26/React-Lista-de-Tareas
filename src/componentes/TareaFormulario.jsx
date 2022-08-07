import React, { useState } from "react";
import "../stylesheets/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";


function TareaFormulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value); /* nos permite extraer el valor del campo de texto que ingreso el usuario */
  };


  const manejarEnvio = e => {
    e.preventDefault(); /* sirve para q no se vuelva a cargar toda la pagina cuando enviamos el formulario */

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    props.onSubmit(tareaNueva); /*onSubmit significa como cuando se envia el formulario*/
  };

  return(
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input 
        className="tarea-input" 
        type="text" 
        placeholder="Escribe una tarea" 
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}


export default TareaFormulario;