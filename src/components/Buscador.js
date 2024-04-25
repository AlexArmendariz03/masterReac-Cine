import {useState} from "react";


export const Buscador = ({ listadoState , setListadoState }) => {

  const [ busqueda, setBusqueda ] = useState("")
  const [ noEncontrado , setNoEncontrado ] = useState(false)

  const buscarPeli = (e) => {
    const nuevaBusqueda = e.target.value.toLowerCase();
    setBusqueda(nuevaBusqueda);

    let pelisEncontradas = listadoState.filter(peli =>
      peli.titulo.toLowerCase().includes(nuevaBusqueda)
    );

    if (nuevaBusqueda.length <= 1 || pelisEncontradas.length === 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    setListadoState(pelisEncontradas);
  }


  return(
    <>
      <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>

        {noEncontrado === true && (
          <span className="no-encontrado">No se a encontrado ninguna coincidencia</span>
        )}

        <form>
          <input
            type="text"
            id="search_field"
            name="busqueda"
            autoComplete="off"
            onChange={buscarPeli}/>
          <button id="search">Buscar</button>
        </form>
      </div>

    </>
  )
}