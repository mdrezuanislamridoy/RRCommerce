import { useState } from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3300/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));

    setUser({ email: "", password: "" });
  };
  return (
    <div className="my-20 flex justify-center items-center">
      <div className="w-96 shadow-xl border p-10 rounded-xl m-auto flex flex-col justify-center items-center">
        <h2 className="text-5xl text-slate-600 my-8 font-medium">Login</h2>
        <img src={icon} className="w-20 mb-6" alt="" />
        <form action="/login" onSubmit={handleSubmit} method="post">
          <div>
            <input
              className="my-4 px-2 py-1 w-full outline-none border-b-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="my-4 px-2 py-1 w-full outline-none border-b-2"
            />
            <input
              type="submit"
              className="w-full border p-2 rounded-full bg-slate-300 hover:bg-slate-600 my-4 hover:text-white"
            />
            <p className="text-center ">
              Don't have an account{" "}
              <Link className="text-blue-500" to="/signup">
                SignUp
              </Link>
            </p>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
