import React, { createContext, useEffect, useState } from 'react';


export const ContextoGeneral = createContext();


export const ContextoGeneralProvider = ({ children }) => {
;
    const [boolModalGeneral, setBoolModalGeneral] = useState(false);
    const [modalSeleccionado, setModalSeleccionado] = useState('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2024%2F02%2F29%2Fscience%2Fcats-animal-behavior-meow.html&psig=AOvVaw2aHo9bZRxC0C7bGGjMqoac&ust=1732036805904000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiW84Wy5okDFQAAAAAdAAAAABAE');



    

  
  return (
    <ContextoGeneral.Provider value={{boolModalGeneral,setBoolModalGeneral,modalSeleccionado,setModalSeleccionado }}>
      {children}
    </ContextoGeneral.Provider>
  );
};
