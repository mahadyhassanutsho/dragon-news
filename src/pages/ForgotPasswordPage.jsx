import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { sendResetPasswordEmail } from "../services/firebase";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const { email } = formData;
      await sendResetPasswordEmail(email);
      reset();
      toast.success(`Password reset email has been sent to ${email}.`);
      navigate("/auth/login");
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

            <button
              type="submit"
              className="btn btn-neutral w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Password Reset Email"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
