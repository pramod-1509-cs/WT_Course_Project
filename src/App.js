import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Register/>} />
  </Routes>
  );
}

export default App;
