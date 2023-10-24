import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
