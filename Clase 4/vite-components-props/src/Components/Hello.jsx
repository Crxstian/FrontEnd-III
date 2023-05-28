

const Hello = ({nombre, children}) => {
  return (
    <>
    <h3>Hello {nombre} </h3>
    {children}
    <hr />
    </>
    
  )
}

export default Hello