import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/career", name: "Career" },
];

export default function Navbar() {
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
      <div className="login-btn flex items-center gap-4">
        <img src={user} />
        <Link to="/auth/login" className="btn btn-primary px-8">
          Login
        </Link>
      </div>
    </nav>
  );
}
