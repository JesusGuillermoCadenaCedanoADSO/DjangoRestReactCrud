import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { PaginaUnidad } from './pages/PaginaUnidad';
import { FormularioUnidad } from './pages/FormularioUnidad';
import { Navigation } from './components/Navigation';
import {Toaster} from "react-hot-toast";


function App(){
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Navigate to="/unidades"/>}></Route>
          <Route path="/unidades" element={<PaginaUnidad/>}></Route>
          <Route path="/crear-unidad" element={<FormularioUnidad/>}></Route>
          <Route path="/unidades/:id" element={<FormularioUnidad/>}></Route>
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App