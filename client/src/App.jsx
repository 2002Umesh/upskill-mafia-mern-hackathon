import './App.css'
import {Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Navbar from './components/ui/Templates/Navbar'
import Search from './pages/Search'
import MentorPage from './pages/MentorPage'
import Profile from './pages/Profile'
import Home from './pages/Home'
import Sidebar from './components/ui/Templates/profilePage/Sidebar'
import Chatpage from "./pages/ChatPage"
import SinglePage from './pages/SinglePage'
import Error from './pages/Error'


function App() {
  return (
    <>   
   <Routes>
    <Route path='/' element={<Navbar></Navbar>}>
    <Route path='/search' element={<Search></Search>}/>
    <Route index element={<Home></Home>}/>
    <Route path='/mentor/:id' element={<MentorPage/>}/>
    </Route>
    <Route path='/profile' element={<Sidebar/>}>
    <Route path='/profile/chat' element={<Chatpage></Chatpage>}/>
    <Route path='/profile/chat/:id' element={<SinglePage></SinglePage>}/>
    <Route index element={<Profile></Profile>}/>
    </Route>
    <Route path='/signup' element={<SignUp></SignUp>}/>
    <Route path='/signin' element={<SignIn></SignIn>}/>
    <Route path='*' element={<Error></Error>}/>
   </Routes>   
    </>
  )
}

export default App
