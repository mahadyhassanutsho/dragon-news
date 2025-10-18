import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playgroundImage from "../../assets/playground.png";

export default function QZone() {
  return (
    <div className="bg-base-200 p-4 rounded">
      <h2 className="font-bold">QZone</h2>
      <div className="mt-4">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playgroundImage} alt="" />
      </div>
    </div>
  );
}
