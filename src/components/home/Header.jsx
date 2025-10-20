import { format } from "date-fns";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center gap-2 p-4">
      <img src={logo} alt="The Dragon News" className="max-w-[400px]" />
      <h2 className="text-accent">Journalism Without Fear or Favour</h2>
      <p className="text-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </header>
  );
}
