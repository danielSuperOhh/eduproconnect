import './App.css'
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import LandingPage from './pages/landingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
  )
}

export default App
