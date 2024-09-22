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

    // Ensure the email and password fields are not empty before making the request
    if (!user.email || !user.password) {
      setMessage("Email and password cannot be empty");
      return;
    }

    fetch("http://localhost:3300/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Correct headers for JSON
      },
      body: JSON.stringify(user), // Send user state as JSON
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid login request");
        }
        return res.json();
      })
      .then((data) => {
        setMessage(data.message); // Show the response message
      })
      .catch((err) => {
        console.error(err);
        setMessage("Login failed, please check your credentials");
      });

    setUser({ email: "", password: "" }); // Reset form after submission
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
              value={user.email} // Bind input to user.email
              onChange={
                (e) => setUser({ ...user, email: e.target.value }) // Update state on change
              }
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="my-4 px-2 py-1 w-full outline-none border-b-2"
              value={user.password} // Bind input to user.password
              onChange={
                (e) => setUser({ ...user, password: e.target.value }) // Update state on change
              }
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
