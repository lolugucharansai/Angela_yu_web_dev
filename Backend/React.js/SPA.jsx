import Home from './Pages/Home'
import Layout from './Pages/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { BrowserRouter, Routes } from 'react-router-dom'

function SPA(){
    return (<BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Conatact' element={<Contact/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    )
}