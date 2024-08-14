
import './App.css';
import style from './assets/css/style.css'
import Login from './components/login/login';

import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>

      {/* <Content /> */}
    </div>
  );
}

export default App;
