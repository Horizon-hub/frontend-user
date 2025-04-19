import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router';
import Search from './pages/Search';
import SearchResult from './pages/SearchResult';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navbar/>} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/search/:id" element={<SearchResult/>} />
      </Routes>
    </div>
  );
}

export default App;
