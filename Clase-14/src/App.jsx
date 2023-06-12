import { useState } from 'react'
import AxiosGet from './Components/AxiosGet'
import AxiosPost from './Components/AxiosPost'
import './App.css'

function App() {

  return (
    <>
      <AxiosGet/>
      <AxiosPost/>
    </>
  )
}

export default App
