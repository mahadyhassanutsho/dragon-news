import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="font-semibold text-2xl text-center">
            Login your account
          </h2>
          <fieldset className="fieldset mt-4">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <Link className="link link-hover">Forgot password?</Link>
            </div>
            <p className="font-semibold text-center mt-4">
              Don't have an account?{" "}
              <Link
                to="/auth/register"
                className="text-secondary link link-hover"
              >
                Register
              </Link>
            </p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
