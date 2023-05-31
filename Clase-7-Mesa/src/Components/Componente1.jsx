import React from 'react'

const Componente1 = ({boton,setBoton}) => {

    const handleButtonClick = (event) => {
      const buttonText = event.target.textContent;
      setBoton([...boton,buttonText]);
    };
  return (
    <>
    <div className='botones'>
        <button className='item' onClick={handleButtonClick}>Punto 222</button>
        <button className='item' onClick={handleButtonClick}>Punto 1</button>
        <button className='item' onClick={handleButtonClick}>Punto 2</button>
        <button className='item' onClick={handleButtonClick}>Punto 3</button>
        <button className='item' onClick={handleButtonClick}>articulo x</button>
    </div>
    </>
  )
}

export default Componente1
