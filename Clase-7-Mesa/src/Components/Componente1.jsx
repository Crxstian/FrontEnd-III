import React from 'react'

const Componente1 = ({boton,setBoton}) => {

  const handleButtonClick = (event) => {
    const buttonText = event.target.textContent;
    setBoton(buttonText); // Establecer el estado con el contenido del botón
  };
  return (
    <>
    <div>
        <button onClick={()=>setBoton([...boton,"Punto 1"])}>Punto 1</button>
        <button onClick={()=>setBoton([...boton,"Punto 2"])}>Punto 2</button>
        <button onClick={()=>setBoton([...boton,"Punto 3"])}>Punto 3</button>
        <button onClick={()=>setBoton([...boton,"articulo x"])}>articulo x</button>
    </div>
    </>
  )
}

export default Componente1