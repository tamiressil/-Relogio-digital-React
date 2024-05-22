//O useEffect garante que o componetente seja renderizado após cada execução.

import React, { useState, useEffect } from 'react'; 

function RelogioDigital() { 
  //Definição do componente, o debaixo defini o relógio em tempo real 
  /*Date().toLocaleTimeString()) inicializa o estado do relógio com a hora atual formatada como uma string usando toLocaleTimeString(). Sendo hora uma variável de estado,e setHora uma  função atualizr o estado do relógio.*/

  const [hora, setHora] = useState(new Date().toLocaleTimeString()); 

  //O useEffect é utilizado para realizar efeitos secundários, neste caso ele está att o relógio a cada segundo.
  useEffect(() => { 

    const interval = setInterval(() => { 

      setHora(new Date().toLocaleTimeString()); 

    }, 1000); 

    return () => clearInterval(interval); 

  }, []); 

  return ( 

    <div className='container' > 

      <h2>Relógio Digital</h2> 

      <p>{hora}</p> 

    </div> 

  ); 

} 

export default RelogioDigital; 
