import axios from 'axios';

const UnidadesApi = axios.create({
    baseURL:"http://localhost:8000/unidades/api/v1/unidades/",
})

export const ObtenerUnidades = () => UnidadesApi.get("/");
export const ObtenerUnidad = (id) => UnidadesApi.get(`/${id}`);
export const CrearUnidad = (unidad) => UnidadesApi.post("/",unidad);
export const EliminarUnidad = (id) => UnidadesApi.delete(`/${id}`);
export const ActualizarUnidad = (id, unidad) => UnidadesApi.put(`/${id}/`,unidad);

