import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <NavLink to={"/"}>Home</NavLink> <br /> <br />
      <NavLink to={"/car"}>Find Car</NavLink> <br /> <br />
      <NavLink to={"/bike"}>Find Bike</NavLink> <br /> <br />
      <NavLink to={"/truck"}>Find Truck</NavLink> <br /> <br />
      <NavLink to={"/offroad"}>Find offRoad</NavLink> <br /> <br />
    </div>
  );
}

export default Menu;
