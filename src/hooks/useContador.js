// hooks/useContador.js
import { useState } from 'react';

export function useContador(valorInicial = 0) {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);
  const resetear = () => setContador(0);

  return { contador, incrementar, decrementar, resetear };
}
export default useContador;

/*import { useState } from 'react';*/