import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import News from './pages/News';
import './App.css';
import NoPage from './pages/Nopage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<News/>}></Route>
          <Route path='*' element={<NoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
