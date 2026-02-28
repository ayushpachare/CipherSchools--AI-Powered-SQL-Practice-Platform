import './App.css'
import Card from './component/Card'
import Hero from './component/Hero'
import SqlQuery from './component/SqlQuery'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/sqlquery' element={<SqlQuery/>}/>
   </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
