

export const Editar = ({ peli , conseguirPeliculas, setEditar, setListadoState }) => {

  const titulo_componente = "Editar Pelicula"

  const guardarEdicion = ( e , id) => {
    e.preventDefault()

    let target = e.target

    const peliculasAlmacenadas = conseguirPeliculas()
    const index = peliculasAlmacenadas.findIndex( peli => peli.id === id)

    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

     peliculasAlmacenadas[index] = peli_actualizada

    localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas))

    setListadoState(peliculasAlmacenadas)

    setEditar(0)

  }

  return(
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={ e => guardarEdicion(e, peli.id)}>
        <input
        type="text"
        name="titulo"
        className="titulo_editado"
        defaultValue={peli.titulo}/>

        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada" />

        <input type="submit" className="editar" value="Actualizar"/>
      </form>
    </div>
  )
}