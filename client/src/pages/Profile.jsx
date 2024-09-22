import { useContext } from "react";
import context from "../context/context";

export default function Profile() {
  const { setIsLoggedIn } = useContext(context);
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button className="bg-slate-400" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
