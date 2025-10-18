import { Link } from "react-router";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <fieldset className="fieldset mt-4">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Image Url</label>
            <input type="text" className="input" placeholder="Image Url" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <p className="font-semibold text-center mt-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-secondary link link-hover">
                Login
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
