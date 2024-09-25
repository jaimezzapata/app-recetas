import { recetasVegetarianas } from "../../data/recetas"
import './Vegetarianas.css'
const Vegetarianas = () => {
  return (
    <div className="cards">
      {
        recetasVegetarianas.map((receta) => (
          <section>
            {/* <p>Id: {receta.id}</p> */}
            <p>Nombre: {receta.nombre}</p>
            <p>Descripcion: {receta.descripcion}</p>
            <p>Dificultad: {receta.dificultad}</p>
            <p>Tiempo: {receta.tiempo}</p>
          </section>
        ))
      }
    </div>
  )
}

export default Vegetarianas