import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FindUs() {
  return (
    <div>
      <h2 className="font-bold">Find Us</h2>
      <div className="mt-4">
        <div className="w-full join join-vertical">
          <button className="btn bg-base-100 join-item justify-start">
            <FaFacebook size={24} /> Facebook
          </button>
          <button className="btn bg-base-100 join-item justify-start">
            <FaTwitter size={24} /> Twitter
          </button>
          <button className="btn bg-base-100 join-item justify-start">
            <FaInstagram size={24} /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
