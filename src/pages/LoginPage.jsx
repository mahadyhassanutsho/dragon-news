import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";
import { loginUser } from "../services/firebase";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { email, password } = formData;
      const user = await loginUser(email, password);
      login(user);
      reset();
      toast.success(`Logged in as ${user.displayName}.`);
      navigate(`${location.state ? location.state : "/"}`);
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

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="font-semibold text-2xl text-center">
            Login your account
          </h2>
          <fieldset className="fieldset mt-4 space-y-1">
            <div>
              <label className="label">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                className={`input ${errors.email && "input-error"}`}
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="label text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="label">Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Password must be greater than 7 character",
                  },
                })}
                type="password"
                className={`input ${errors.password && "input-error"}`}
                placeholder="*******"
              />
              {errors.password && (
                <p className="label text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <Link className="link link-hover">Forgot password?</Link>
            </div>
            <p className="font-semibold text-center my-2">
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
              className="btn btn-neutral"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
