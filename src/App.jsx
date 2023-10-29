import Home from "./Pages/Home"
import Availablepackage from "./component/Availablepackage"
import Navbar from "./component/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Package from './Pages/Package'
import Login from "./Pages/Login"


function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/package' element={<Package/>}/>
      </Routes>
    </>
    
      
 
  )
}

export default App
