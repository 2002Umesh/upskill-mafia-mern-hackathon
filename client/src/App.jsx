import './App.css'
import {Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {


  return (
    <>
   
   <Routes>
    <Route path='/signup' element={<SignUp></SignUp>}/>
    <Route path='/signin' element={<SignIn></SignIn>}/>
   </Routes>
   

      
    </>
  )
}

export default App
