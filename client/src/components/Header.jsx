import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logos.png";

export default function Header() {
  return (
    <div>
      <div className="bg-black text-white text-center py-3 text-sm">
        <h4>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="#" className="mx-3 underline hover:text-gray-300">
            ShopNow
          </Link>
        </h4>
      </div>
      <div className="border-b-2">
        <nav className="flex justify-between h-20 items-center w-4/5 m-auto">
          <div className="logo w-1/5">
            <img src={Logo} alt="" />
          </div>

          <ul className="flex w-2/5 justify-evenly">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>

          <div className="othersH flex w-1/4 ml-6 items-center justify-end">
            <div className="relative w-4/5">
              <input
                className="w-full border border-gray-300 p-2 rounded"
                type="text"
                name="search"
                id="searchBar"
                placeholder="What are you looking for?"
              />
              <FontAwesomeIcon
                className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 text-gray-500"
                icon={faMagnifyingGlass}
              />
            </div>

            <div className="favourite w-1/5 flex justify-evenly items-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-xl text-gray-600 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faCartPlus}
                className="text-xl text-gray-600 cursor-pointer"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
