import { Link, NavLink } from "react-router";
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
    try {
      logout();
      toast.info(`Logged out successfully.`);
    } catch (e) {
      toast.error(`Error: ${e.code || "Logout failed! Please try again."}`);
    }
  };

  return (
    <nav className="w-11/12 mx-auto py-4 flex items-center justify-between">
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
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar rounded-full cursor-pointer border-2 border-transparent hover:border-secondary transition duration-300"
                >
                  <div className="w-14 rounded-full bg-accent">
                    <img src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm"
                >
                  <li>
                    <p>
                      <span className="font-semibold">Username:</span>{" "}
                      {user.displayName}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      {user.email || user.providerData[0]?.email}
                    </p>
                  </li>
                  <li>
                    <button
                      className="btn btn-primary px-8"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
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
