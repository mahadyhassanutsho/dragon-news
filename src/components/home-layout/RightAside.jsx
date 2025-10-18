import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";
import QZone from "./QZone";

export default function RightAside() {
  return (
    <div className="space-y-10">
      <SocialLogin />
      <FindUs />
      <QZone />
    </div>
  );
}
