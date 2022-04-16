import { useState } from "react"
import { Link, useParams } from "react-router-dom"

const CoastersDetails = () => {

    const {coaster_id} = useParams()
    const [coaster,setCoaster] = useState({})

    const loadCosterDetails = () => {
        fetch(`http://localhost:5005/api/details/${coaster_id}`)
        .then(response => response.json())
        .then(coaster => setCoaster(coaster))
    }

    loadCosterDetails()
    return (

        <main>
            <h1>Detalles de {coaster.title}</h1>
            <hr/>
            <p>{coaster.description}</p>
            <h3>Espectativas</h3>
            <ul>

                <li>Altura : {coaster.length}</li>
                <li>Inversiones : {coaster.inversions}</li>
            </ul>
            <img src={coaster.imageUrl}/>
            <Link to="/">Volver al inicio</Link>
        </main>
    )
}

export default CoastersDetails