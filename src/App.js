import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import DetailsPokemon from './pages/DetailsPokemon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/details/:name' element={<DetailsPokemon/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
