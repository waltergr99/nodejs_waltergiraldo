import { useState } from "react"
import { Link } from "react-router-dom"
import "./CoastersPage.css"
const CoastersPage = () => {

    const [coasters,setCoasters] = useState([])

    const loadCoasters = () => {

        fetch('http://localhost:5005/api/coasters')
        .then(res => res.json())
        .then(allCoasters =>setCoasters(allCoasters))
    }
    loadCoasters()
    return (

        <main>
            <h1>Esta sera mi Galeria</h1>
            <hr/>
            {coasters.map(eachCoaster =>{
                return (
                    <Link to={`/detalles/${eachCoaster._id}`}>
                    
                    
                    <article className="coaster-card">
                        <img src={eachCoaster.imageUrl}></img>
                        <h1>{eachCoaster.title}</h1>
                    </article>
                    </Link>

                )

            })}
            <Link to="/final">Ir a detalles</Link>
        </main>
    )
}

export default CoastersPage