import About from "./components/about/about.component";
import Intro from "./components/introduction/intro.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Education from "./components/education/education.component";
import Contact from "./components/contact/contact.component";
import Navbar from "./components/navbar/navbar.component";
import { Projects } from "./components/Projects/project";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/education" element={<Education/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
