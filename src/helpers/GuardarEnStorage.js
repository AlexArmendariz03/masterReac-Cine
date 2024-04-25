 export const GuadarEnStorage = (key,elemento)  => {

  const elementos = JSON.parse(localStorage.getItem("pelis"))
  localStorage.setItem("pelis" , JSON.stringify([elemento]))

  if (Array.isArray(elementos)){
    elementos.push(elemento)
  } else{
    elementos = [elemento];
  }
  localStorage.setItem("pelis", JSON.stringify((elementos)))

  return elemento
}
