import { useActionState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";
import { loginUser } from "../services/firebase";

export default function LoginPage() {
  const { login } = useAuth();

  const loginAction = async (_, formData) => {
    try {
      const { email, password } = {
        email: formData.get("email"),
        password: formData.get("password"),
      };
      const user = await loginUser(email, password);
      login(user);
      toast.success(`Logged in as ${user.displayName}.`);
      return {
        success: true,
      };
    } catch (e) {
      toast.error(`Error: ${e.code || "Login failed! Please try again."}`);
      return {
        success: false,
      };
    }
  };

  const [_, formAction, inProgress] = useActionState(loginAction, {
    success: false,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form action={formAction} className="card-body">
          <h2 className="font-semibold text-2xl text-center">
            Login your account
          </h2>
          <fieldset className="fieldset mt-4">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              required
              minLength={7}
              className="input"
              placeholder="Password"
            />
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
            <button
              type="submit"
              className="btn btn-neutral mt-4"
              disabled={inProgress}
            >
              {inProgress ? "Logging in..." : "Login"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
