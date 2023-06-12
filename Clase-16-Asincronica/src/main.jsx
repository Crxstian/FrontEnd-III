import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Home'
import About from './About'
import Faqs from './Faqs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/faqs' element={<Faqs/>} />
    </Routes>
  </Router>
    
  </BrowserRouter>,
)
