// Put imports here!
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Put imported components here!
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/NavBar';
import Videos from './Components/Videos';

//App.css
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/videos/:id' element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
