import { Routes, Route} from 'react-router-dom'
import FaqPage from './pages/FaqPage'
import HomePage from './pages/HomePage'
import Room from './pages/Room'
import Syarat from './pages/Syarat'
import Testimoni from './pages/Testimoni'
import Navbar from './components/NavbarComponent'
import Footer from './components/Footer'

function App() {
 return <div>
  <Navbar />

  <Routes>
    <Route path='/' Component={HomePage}/>
    <Route path='/Room' Component={Room}/>
    <Route path='/syarat' Component={Syarat}/>
    <Route path='/faq' Component={FaqPage}/>
    <Route path='/testimoni' Component={Testimoni}/>
  </Routes>
  
  <Footer />
 </div>
}

export default App
