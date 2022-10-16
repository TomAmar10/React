import { Route, Routes } from "react-router-dom";
import BikeLocator from "../BikeLocator/BikeLocator";
import CarLocator from "../CarLocator/CarLocator";
import Locator from "../Locator/Locator";
import OffRoadLocator from "../OffRoadLocator/OffRoadLocator";
import Page404 from "../Page404/Page404";
import TruckLocator from "../TruckLocator/TruckLocator";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Locator />} />
        <Route path="/car" element={<CarLocator />} />
        <Route path="/bike" element={<BikeLocator />} />
        <Route path="/truck" element={<TruckLocator />} />
        <Route path="/offroad" element={<OffRoadLocator />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default Routing;
