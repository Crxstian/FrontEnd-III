import React, { useEffect, useState } from 'react'
import Card from "./components/Card"
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [beers, setBeers] = useState([])


  const url = 'https://api.punkapi.com/v2/beers/'

  useEffect(() => {
      axios(url)
      .then(res => setBeers(res.data))
}, [])

  return (
    <div className='grid'>
        {beers.length 
            ? beers.map(beer => (<Link to={`beer/`+ beer.id}><Card data={beer}/></Link>))
            : null
        }
    </div>
  )
}

export default Home