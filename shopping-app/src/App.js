import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route >
          <Route index element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
