import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

export default function Navbar() {
  const isAuthenticated = useAuthStore((state:any) => state.isAuthenticated);
  const navigate = useNavigate();
  const logout = useAuthStore((state:any) => state.logout);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    console.log("Logging out...");
    logout();
    navigate("/");
  };

  return (
    <nav>
      <motion.div
        className="flex bg-gray-800 items-center justify-between text-white p-5 h-28"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0.5 }}
        transition={{ duration: 1, type: "tween" }}
      >
        <div>
          <Link to="/" className="mx-5 font-extrabold text-3xl">
            CricWic
          </Link>
        </div>
        <div className="flex">
          <Link to="/discover" className="mx-5 font-regular text-xl">
            Discover
          </Link>
          <Link to="/sponsor" className="mx-5 font-regular text-xl">
            For Sponsors
          </Link>
          <Link to="/player" className="mx-5 font-regular text-xl">
            For Players
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <button onClick={handleLogout} className="mx-5 font-regular text-xl">
              Logout
            </button>
          ) : (
            <>
              <button onClick={handleLogin} className="mx-5 font-regular text-xl">
                Login
              </button>
              <button onClick={handleRegister} className="mx-5 font-regular text-xl">
                SignUp
              </button>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
}
