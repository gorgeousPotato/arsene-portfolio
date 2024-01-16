import NavBar from "../src/components/NavBar/NavBar";
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {
        <Routes>
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default App;
