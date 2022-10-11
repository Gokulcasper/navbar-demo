import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
