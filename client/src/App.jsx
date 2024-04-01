import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<SignUp></SignUp>}/>
    <Route path='/signin' element={<SignIn></SignIn>}/>
   </Routes>
   </BrowserRouter>

      
    </>
  )
}

export default App
