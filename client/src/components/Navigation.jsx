import { Link } from "react-router-dom"

export function Navigation(){
    return(
        <div className="flex justify-between py-3">
            <Link to="/unidades">
                <h1 className="font-bold text-3xl mb-4">App Unidades de medición</h1>
            </Link>
            <button className="bg-orange-500 px-3 py-2 rounded-lg">
                <Link to = "/crear-unidad">crear unidad</Link>
            </button>
        </div>
    )
}