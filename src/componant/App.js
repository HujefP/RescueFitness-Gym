import Navbar from './Navbar';
import '../css/App.css';
import { Route, Routes } from 'react-router-dom';
import Diet from '../componant/pages/Diet'
import Home from '../componant/pages/Home'
import More from '../componant/pages/More'
import Welcome from './pages/Welcome';

function App() {

  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/deit' element={<Diet />}/>
      <Route path='/more' element={<More />}/>
    </Routes>
    </div>
  );
}

export default App;
