import {set, useForm} from 'react-hook-form';
import { useEffect } from 'react';
import { CrearUnidad, EliminarUnidad, ActualizarUnidad, ObtenerUnidad } from '../api/unidades.api';
import { useNavigate, useParams } from 'react-router-dom';
import {toast} from 'react-hot-toast';

export function FormularioUnidad(){

    const {
        register, 
        handleSubmit, 
        formState: {errors},
        setValue
        } = useForm();
    const navigate= useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data=>{
        if (params.id){
            await ActualizarUnidad(params.id, data);
            toast.success('Unidad actualizada',{
                position:"bottom-right",
                style:{
                    background:"#101010",
                    color:"#fff"
                }
            });
        }else{
            await CrearUnidad(data);
            toast.success('Unidad creada',{
                position:"bottom-right",
                style:{
                    background:"#101010",
                    color:"#fff"
                }
            });
        }
        navigate("/unidades");
    })

    useEffect(()=>{
        async function CargarUnidad(){
            if (params.id){
                const {data: {simbolo, significado}} = await ObtenerUnidad(params.id)
                setValue('simbolo', simbolo)
                setValue('significado', significado)
            }
        }
        CargarUnidad()
    },[])
     
    return(
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="simbolo"
                    {...register("simbolo", {required:true})}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                />
                {errors.title && <span>el campo simbolo es requerido</span>}
                <textarea rows="3" placeholder="significado"
                    {...register("significado", {required:true})}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                ></textarea>
                {errors.description && <span>el campo significado es requerido</span>}
                <button
                className='bg-green-600 p-3 rounded-lg block w-full mt-3'
                >Guardar</button>
            </form>
            {params.id &&
            (
                <div className='flex justify-end'>
                    <button
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick={async ()=>{
                            const accepted = window.confirm('¿Desea eliminar la unidad?')
                            if (accepted){
                                await EliminarUnidad(params.id);
                                toast.success('Unidad eliminada',{
                                    position:"bottom-right",
                                    style:{
                                        background:"#101010",
                                        color:"#FF4D00"
                                    }
                                });
                                navigate("/unidades");
                            }
                        }
                        }>Eliminar
                    </button>
                </div>
            )
            }
        </div>
    )
}
