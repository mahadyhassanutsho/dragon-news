import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div>
      <h2 className="font-bold">Login with</h2>
      <div className="mt-4 space-y-4">
        <button className="btn btn-outline w-full gap-2">
          <FcGoogle size={24} />
          Login with Google
        </button>
        <button className="btn btn-outline w-full gap-2">
          <FaGithub size={24} />
          Login with GitHub
        </button>
      </div>
    </div>
  );
}
