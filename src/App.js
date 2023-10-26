import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import Details from './component/Details';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
