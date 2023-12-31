import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components';
import Home from './pages/Home/Home';
import Legal from './pages/Legal/Legal';
import Immigration from './pages/Immigration/Immigration';
import './App.css';

const App = () => {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/legal' element={<Legal /> } />
    <Route path='/immigration' element={<Immigration /> } />
  </Routes>
  </>
  )
}

export default App;
