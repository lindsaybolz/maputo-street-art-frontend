import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Mission from './pages/Mission';
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Mission />} />
          <Route path='/gallery' element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
