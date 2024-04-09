import { useEffect, useState } from "react";
import { ObtenerUnidades } from "../api/unidades.api";
import { CeldaUnidad } from "./CeldaUnidad";

export function ListarUnidades(){

    const [unidades, setUnidad] = useState([]);

    useEffect(()=>
    {
        async function loadUnidad(){
            const res = await ObtenerUnidades();
            setUnidad(res.data);
        }
        loadUnidad();
    },[]);

    return (
        <div className="grid grid-cols-3 gap-3">

        {unidades.map((unidad) =>(
            <CeldaUnidad key={unidad.id} unidad={unidad}></CeldaUnidad>
        ))}
        
        </div>
        );
    
}