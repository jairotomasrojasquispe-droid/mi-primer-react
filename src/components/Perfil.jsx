// components/Perfil.jsx
import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';

function Perfil() {
  const { usuario } = useContext(UsuarioContext);
  return <p>Hola, {usuario}</p>;
}
export default Perfil;