import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Navbar from './components/ui/Templates/Navbar'
import Search from './pages/Search'
import MentorPage from './pages/MentorPage'
import Profile from './pages/Profile'

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar></Navbar>}>
    <Route path='/search' element={<Search></Search>}/>
    <Route path='/mentor' element={<MentorPage/>}/>

    </Route>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/signup' element={<SignUp></SignUp>}/>
    <Route path='/signin' element={<SignIn></SignIn>}/>
   
   </Routes>
   </BrowserRouter>

      
    </>
  )
}

export default App
