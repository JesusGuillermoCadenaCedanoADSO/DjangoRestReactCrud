import { useNavigate } from "react-router-dom"

export function CeldaUnidad({unidad}){

    const navigate= useNavigate();

    return(
        <div
            className="bg-indigo-900 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick = {()=>{
                navigate(`/unidades/${unidad.id}`)
            }}
        >
            <h1 className="font-bold">{unidad.simbolo}</h1>
            <p className="text-slate-400">{unidad.significado}</p>
            
        </div>
    )
}