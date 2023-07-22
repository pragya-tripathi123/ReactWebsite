import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
// import Team from "./components/Team"
import Footer from "./components/Carousel_pages/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Carousel></Carousel>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/service" element={<Service></Service>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
