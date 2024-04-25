import React, { useState } from "react";
import {GuadarEnStorage} from "../helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
  const tituloComponente = "Añadir Pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: ""
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatos = (e) => {
    e.preventDefault();

    const titulo = e.target.titulo.value;
    const descripcion = e.target.descripcion.value;

    const peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };
    setPeliState(peli)

    setListadoState(elementos => {
      return [...elementos,peli]
    })
    GuadarEnStorage("pelis",peli)
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      <strong>
        {(titulo && descripcion ) && `Has creado la película: ${titulo}`}
      </strong>
      <form onSubmit={conseguirDatos}>
        <input
          type="text"
          id="titulo"
          name="titulo"
          placeholder="Titulo"
        />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripción"
        />
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
