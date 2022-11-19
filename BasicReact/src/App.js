import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderBar from './components/headerBar/HeaderBar';
import NameList from './components/Pages/nameList/NameList';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderBar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/name-list' element={<NameList />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
