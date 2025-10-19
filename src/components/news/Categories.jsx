import axios from "axios";
import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = axios.get("/categories.json").then((res) => res.data);

export default function Categories() {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold">All Categories</h2>
      <ul className="mt-4 space-y-2">
        {categories.map((category, i) => (
          <li key={i}>
            <NavLink
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `w-full btn font-semibold ${
                  isActive
                    ? "bg-base-300 text-inherit"
                    : "bg-base-100 text-accent"
                } hover:bg-base-200`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
