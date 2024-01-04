
import './App.css';
import Auth from './pages/Auth';
import { Route, Routes } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import VideoWatch from './pages/VideoWatch';


function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch/:id' element={<VideoWatch/>}/>
    </Routes>

   </div>
  );
}

export default App;
