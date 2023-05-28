const FuncComponent = ({texto,amount}) =>{
    return(
        <>
        <h1>Este es el componente de {texto}</h1>
        {amount*2}
        </>
    )
}
export default FuncComponent