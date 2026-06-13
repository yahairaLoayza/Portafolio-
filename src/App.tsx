import { Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './pages/inicio/Inicio';
import Perfil from './pages/perfil/Perfil';
import Proyectos from './pages/proyectos/Proyectos';
import CasoEstudio from './pages/caso-estudio/CasoEstudio';
import Servicios from './pages/servicios/Servicios';
import Contacto from './pages/contacto/Contacto';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/proyectos/caso-estudio" element={<CasoEstudio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

