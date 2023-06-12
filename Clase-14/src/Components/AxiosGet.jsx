import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGet = () => {

    const [comentarios, setComentarios] = useState([{}]);

    const url = 'https://jsonplaceholder.typicode.com/comments';


    useEffect(() => {
        axios.get(url).then((res) => {
            setComentarios(res.data)
            console.log(comentarios)
        })
    ;
    }, [])

  return (
    <>
    <ul>
        {comentarios.map((element, index) => 
        <li key={index}>
            email: {element.email}
            <h3>{element.name}</h3> 
            <h5>{element.body}</h5>
        </li>
        )}
    </ul>
    </>
  )
  }

export default AxiosGet