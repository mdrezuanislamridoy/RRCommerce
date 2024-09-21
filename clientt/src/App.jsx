import { BrowserRouter } from "react-router-dom";
import Header from "../../client/src/components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "../../client/src/pages/HomePage";

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
