// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import SingleMoviePage from './pages/SingleMoviePage';
import SearchedMoviePage from './pages/SearchedMoviePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/topRated' element={<TopRatedPage />} />
            <Route path='/upcoming' element={<UpcomingPage />} />
            <Route path='/singleMovie/:id' element={<SingleMoviePage />} />
            <Route path='/search' element={<SearchedMoviePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
