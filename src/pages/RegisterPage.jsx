import { useActionState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { uploadImage } from "../services/imgbb";
import { createUser } from "../services/firebase";
import { useAuth } from "../providers/AuthProvider";

export default function RegisterPage() {
  const { login } = useAuth();

  const registerAction = async (_, formData) => {
    const { name, image, email, password } = {
      name: formData.get("name"),
      image: formData.get("image"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const imageUrl = await uploadImage(image);
      const user = await createUser(name, imageUrl, email, password);
      login(user);
      toast.success(`Successfully registered ${user.displayName}.`);
      return { success: true };
    } catch (e) {
      toast.error(
        `Error: ${e.code || "Registration failed! Please try again."}`
      );
      return { success: false };
    }
  };

  const [_, formAction, inProgress] = useActionState(registerAction, {
    success: false,
  });

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" action={formAction}>
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <fieldset className="fieldset mt-4 space-y-2">
            <div className="space-y-0.5">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                required
                minLength={3}
                className="input"
                placeholder="Name"
              />
            </div>
            <div className="space-y-0.5">
              <label className="label">Image</label>
              <input
                type="file"
                name="image"
                required
                className="file-input"
                placeholder="Image Url"
              />
            </div>
            <div className="space-y-0.5">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input"
                placeholder="Email"
              />
            </div>
            <div className="space-y-0.5">
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                required
                minLength={7}
                className="input"
                placeholder="Password"
              />
            </div>
            <p className="font-semibold text-center mt-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-secondary link link-hover">
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="btn btn-neutral mt-4"
              disabled={inProgress}
            >
              {inProgress ? "Registering..." : "Register"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
