import { useState } from "react";
import icon from "../assets/icon.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: "user",
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3300/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage("user registered Successfull");
        setUser({
          name: "",
          email: "",
          password: "",
          type: "user",
        });
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed To Insert user");
        setSubmitted(false);
      });
  };

  return (
    <div className="my-20 flex justify-center items-center">
      <div className="w-96 shadow-xl border p-10 rounded-xl m-auto flex flex-col justify-center items-center">
        <h2 className="text-5xl text-slate-600 my-8 font-medium">SignUp</h2>
        <img src={icon} className="w-20  mb-6" alt="Sign Up Icon" />
        {submitted ? (
          <p className="text-green-500">{message}</p>
        ) : (
          <p className="text-red-500">{message}</p>
        )}
        <form action="/signup" onSubmit={handleSubmit} method="post">
          <div>
            <input
              className="my-4 px-2 py-1 w-full outline-none border-b-2"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={user.name}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, name: e.target.value }))
              }
            />
            <input
              className="my-4 px-2 py-1 w-full outline-none border-b-2"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={user.email}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
              }
            />
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              className="my-4 px-2 py-1 w-full outline-none border-b-2"
              onChange={(e) =>
                setUser((prevUser) => ({
                  ...prevUser,
                  password: e.target.value,
                }))
              }
              value={user.password}
            />
            <input
              type="radio"
              name="type"
              id="user"
              value="user"
              checked={user.type === "user"}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, type: e.target.value }))
              }
            />
            <label htmlFor="user">User</label>
            &nbsp;&nbsp;
            <input
              type="radio"
              name="type"
              id="Admin"
              value="Admin"
              checked={user.type === "Admin"}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, type: e.target.value }))
              }
            />
            <label htmlFor="Admin">Admin</label>
            <input
              required
              type="submit"
              className="w-full border p-2 rounded-full bg-slate-300 hover:bg-slate-600 my-4 hover:text-white"
            />
            <p className="text-center ">
              Already have an account{" "}
              <Link className="text-blue-500" to="/login">
                LogIn
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
