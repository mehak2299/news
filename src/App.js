
import './App.css';
import NavBar from './Compnents/NavBar';
import New from './Compnents/New';
import NewsItem from './Compnents/NewsItem';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<New/>} />
      </Routes>
      </BrowserRouter>
   
     
   
    </div>
  );
}

export default App;
