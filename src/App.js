import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Error from './pages/Error';
import Stories from './pages/Stories';
import Store from './pages/Store';
import Tour from './pages/Tour';
import Join from './pages/Join';
import Donate from './pages/Donate';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/store' element={<Store />} />
          <Route path='/tour' element={<Tour />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/join' element={<Join />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
