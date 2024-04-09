import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TaskPage';
import { TaskFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
import {Toaster} from "react-hot-toast";


function App(){
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to="/unidades"/>}></Route>
          <Route path="/unidades" element={<TasksPage/>}></Route>
          <Route path="/crear-unidad" element={<TaskFormPage/>}></Route>
          <Route path="/unidades/:id" element={<TaskFormPage/>}></Route>
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App