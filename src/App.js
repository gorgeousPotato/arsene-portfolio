import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage/>
      <About/>
      <Education />
      {
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default App;
