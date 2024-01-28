import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Articles from "./components/Articles/Articles";
import Contacts from "./components/Contacts/Contacts"
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage/>
      <About/>
      <Education />
      <Experience />
      <Articles />
      <Contacts />

      {
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default App;
