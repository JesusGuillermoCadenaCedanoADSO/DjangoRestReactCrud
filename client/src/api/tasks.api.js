import axios from 'axios';

const taskdsApi = axios.create({
    baseURL:"http://localhost:8000/unidades/api/v1/unidades/",
})

export const getAllTasks = () => taskdsApi.get("/");
export const getTask = (id) => taskdsApi.get(`/${id}`);
export const createTask = (task) => taskdsApi.post("/",task);
export const deleteTask = (id) => taskdsApi.delete(`/${id}`);
export const updateTask = (id, task) => taskdsApi.put(`/${id}/`,task);

