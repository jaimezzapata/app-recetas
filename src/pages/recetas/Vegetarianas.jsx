import { Link } from "react-router-dom"
import './Vegetarianas.css'
import { useEffect, useState } from "react"
let urlRecetas = 'http://localhost:3000/vegetarianas'

const Vegetarianas = () => {
  const [recetasVegetarianas, setRecetasVegetarianas] = useState([])

  function consultarRecetas() {
    fetch(urlRecetas)
      .then(response => response.json())
      .then(json => setRecetasVegetarianas(json))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    consultarRecetas()
  }, [])

  return (
    <div className="cards">
      {
        recetasVegetarianas.map((receta) => (
          <section key={receta.id}>
            {/* <p>Id: {receta.id}</p> */}
            <p>Nombre: {receta.nombre}</p>
            <p>Descripcion: {receta.descripcion}</p>
            <p>Dificultad: {receta.dificultad}</p>
            <p>Tiempo: {receta.tiempo}</p>
            <div>
              <button className="eliminar">Eliminar</button>
              <Link to={'/editar-receta-vegetariana'} className="editar">Editar</Link>
              <Link className="detalle">Detalles</Link>
            </div>
          </section>
        ))
      }
    </div>
  )
}

export default Vegetarianas