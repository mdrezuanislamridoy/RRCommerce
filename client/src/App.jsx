import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <HomePage></HomePage>
      </div>
    </BrowserRouter>
  );
}
