import { Link, NavLink } from "react-router";
import userImage from "../../assets/user.png";
import { useAuth } from "../../providers/AuthProvider";
import Loading from "../shared/Loading";
import { toast } from "react-toastify";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/career", name: "Career" },
];

export default function Navbar() {
  const { user, isPending, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.info(`Logged out successfully.`);
  };

  return (
    <nav className="w-11/12 mx-auto my-4 flex items-center justify-between">
      <div></div>
      <ul className="flex items-center gap-4 text-accent">
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
      {isPending ? (
        <Loading />
      ) : (
        <div className="login-btn flex items-center gap-4">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-16 rounded-full bg-accent">
                  <img src={user.photoURL} />
                </div>
              </div>
              <button className="btn btn-primary px-8" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <div className="avatar">
                <div className="w-16 rounded-full bg-accent">
                  <img src={userImage} />
                </div>
              </div>

              <Link to="/auth/login" className="btn btn-primary px-8">
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
