import './App.css';
import Login from './Pages/Login';
import Join from './Pages/Join';
import Home from './Pages/Home';
import Community from './Pages/Community';
import UserSearch from './Pages/UserSearch';
import MovieInformation from './Pages/MovieInformation';
import MyPage from './Pages/MyPage';
import Userpage from './Pages/UserPage';
import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import MovieSearch from './Pages/MovieSearch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/movie-information/:movieId" element={<MovieInformation/>}/>
        <Route path="/my-page" element={<MyPage/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/movie-search" element={<MovieSearch/>}/>
        <Route path="/user-page" element={<Userpage/>}/>
        <Route path="/user-search" element={<UserSearch/>}/>
      </Routes>
    </div>
  );
}

export default App;