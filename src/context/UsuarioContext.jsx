// context/UsuarioContext.jsx
import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState("María");

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}
export default UsuarioContext;