import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import frame611 from "../assets/Frame 611.png";
import frame612 from "../assets/Frame 612.png";
import frame613 from "../assets/Frame 613.png";
import frame614 from "../assets/Frame 614.png";

export default function SliderTest() {
  return (
    <div className="box-border">
      <div className="flex w-4/5 m-auto my-4">
        <div className="w-1/5 bg-white shadow-lg p-4 border-r-2">
          <ul className="space-y-4">
            <li>
              <Link to="/womens-fashion">Womens Fashion</Link>
            </li>
            <li>
              <Link to="/mens-fashion">Mens Fashion</Link>
            </li>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/home-lifestyle">Home & Lifestyle</Link>
            </li>
            <li>
              <Link to="/medicine">Medicine</Link>
            </li>
            <li>
              <Link to="/sports-outdoor">Sports & Outdoor</Link>
            </li>
            <li>
              <Link to="/baby-toys">Baby & Toys</Link>
            </li>
            <li>
              <Link to="/groceries-pets">Groceries & Pets</Link>
            </li>
            <li>
              <Link to="/health-beauty">Health & Beauty</Link>
            </li>
          </ul>
        </div>

        <div className="w-4/5 ml-10 mx-auto mt-8 py-10  bg-black text-white flex justify-between items-center">
          <div className="w-3/6 ml-20">
            <div className="flex items-center">
              <i className="fa-brands fa-apple mr-2 text-5xl"></i>
              <p>iPhone 14 Series</p>
            </div>
            <h1 className="text-5xl my-6 font-semibold">
              Up to 10% <br />
              off Voucher
            </h1>
            <a href="">
              Shop Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </a>
          </div>
          <div className="3/6">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="w-4/5 m-auto mt-20">
        <div className="todays">
          <h3 className="text-red-600">Todays</h3>
        </div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl my-4 font-semibold">Flash Sales</h2>
          </div>
          <div></div>
          <div>
            <button className="px-3 py-1 mx-2 bg-slate-400 rounded-full">
              {" "}
              &lt;{" "}
            </button>
            <button className="px-3 py-1 mx-2 bg-slate-400 rounded-full">
              {" "}
              &gt;{" "}
            </button>
          </div>
        </div>
        <div className="cards flex justify-between my-2">
          <div className="shadow-xl w-1/5">
            <div className="bg-slate-200 p-2 box-border flex justify-center items-center mb-4">
              <img className="w-40 " src={frame611} alt="" />
            </div>
            <div className="px-2">
              <h3 className="font-semibold">HAVIT HV-G92 Gamepad</h3>
              <p>
                <span className="text-red-600 mr-2 text-sm">$120</span>
                <span className="text-sm line-through text-gray-400">$160</span>
              </p>
              <p></p>
            </div>
          </div>
          <div className="shadow-xl w-1/5">
            <div className="bg-slate-200 p-2 box-border flex justify-center items-center mb-4">
              <img className="w-40 " src={frame612} alt="" />
            </div>
            <div className="px-2">
              <h3 className="font-semibold">AK-900 Wired Keyboard</h3>
              <p>
                <span className="text-red-600 mr-2 text-sm">$960</span>
                <span className="text-sm line-through text-gray-400">
                  $1160
                </span>
              </p>
              <p></p>
            </div>
          </div>
          <div className="shadow-xl w-1/5">
            <div className="bg-slate-200 p-2 box-border flex justify-center items-center mb-4">
              <img className="w-40 " src={frame613} alt="" />
            </div>
            <div className="px-2">
              <h3 className="font-semibold">IPS LCD Gaming Monitor</h3>
              <p>
                <span className="text-red-600 mr-2 text-sm">$370</span>
                <span className="text-sm line-through text-gray-400">$400</span>
              </p>
              <p></p>
            </div>
          </div>
          <div className="shadow-xl w-1/5">
            <div className="bg-slate-200 p-2 box-border flex justify-center items-center mb-4">
              <img className="w-40 " src={frame614} alt="" />
            </div>
            <div className="px-2">
              <h3 className="font-semibold">S-Series Comfort Chair </h3>
              <p>
                <span className="text-red-600 mr-2 text-sm">$375 </span>
                <span className="text-sm line-through text-gray-400">$400</span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
