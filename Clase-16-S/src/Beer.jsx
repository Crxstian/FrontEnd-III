import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

//Esta pagina renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState([])
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);


        //Deberas completar este fetch con el parametro correspondiente
        const url = 'https://api.punkapi.com/v2/beers/' + params.id

      useEffect(() => {
          axios(url)
          .then(res => setBeer(res.data[0]))
    }, [])
    
  console.log(beer);
  
  return (
    <div key={beer.id}>
        <h2>Cerveza numero...{params.id}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={()=> navigate (-1)}>Go back</button>
    </div>

  )
}

export default Beer