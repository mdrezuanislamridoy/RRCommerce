import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useContext } from "react";
import context from "./context/context";
import "./App.css";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

export default function App() {
  const { isLoggedIn } = useContext(context);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {isLoggedIn && (
            <Route path="/profile" element={<Profile></Profile>} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
