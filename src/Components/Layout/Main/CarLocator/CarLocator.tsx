import axios from "axios";
import { SyntheticEvent, useState } from "react";
import SingleCarData from "../../../../Models/SingleCarData";
import Urls from "../../../../Models/URLs";
import SingleCar from "../SingleCar/SingleCar";
import "./CarLocator.css";

function CarLocator(): JSX.Element {
  const [carNumber, setCar] = useState("");
  const [allCars, setCarInfo] = useState<SingleCarData[]>([]);
  let tempCars: SingleCarData[] = [];
  const changeNumber = (args: SyntheticEvent) => {
    const myCar = (args.target as HTMLInputElement).value;
    setCar(myCar);
  };
  const searchCar = () => {
    getData_2();
  };

  const getData_1 = async () => {
    const result = await axios.get(Urls.carUrl + carNumber);
    const data = result.data.result.records;
    storeResult(data);
    setCarInfo(tempCars);
  };

  const getData_2 = () => {
    axios
      .get(Urls.carUrl + carNumber)
      .then((result) => {
        storeResult(result.data.result.records);
      })
      .then(() => {
        tempCars.map(async (item) => {
          const result = await axios.get(Urls.handiCapUrl + item.mispar_rechev);
          item.isHandiCap =
            result.data.result.records.length > 0 ? "HandiCap" : "Not HandiCap";
          setCarInfo(tempCars);
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const storeResult = (myData: SingleCarData[]) => {
    myData.map(async (item: SingleCarData) => {
      let car: SingleCarData = {
        mispar_rechev: item.mispar_rechev,
        tozeret_nm: item.tozeret_nm,
        kinuy_mishari: item.kinuy_mishari,
        tzeva_rechev: item.tzeva_rechev,
        shnat_yitzur: item.shnat_yitzur,
        tokef_dt: item.tokef_dt,
        isHandiCap: "",
      };
      tempCars.push(car);
    });
  };

  return (
    <div className="CarLocator">
      <div className="box">
        <h2>Car Locator</h2>
        <input
          type="text"
          placeholder="enter car number"
          onChange={changeNumber}
        />
        <input type="button" value="search" onClick={searchCar} />
      </div>
      <div className="allCarsContainer">
        {allCars.map((car) => (
          <SingleCar
            key={car.mispar_rechev}
            mispar_rechev={car.mispar_rechev}
            tozeret_nm={car.tozeret_nm}
            kinuy_mishari={car.kinuy_mishari}
            tzeva_rechev={car.tzeva_rechev}
            shnat_yitzur={car.shnat_yitzur}
            tokef_dt={car.tokef_dt?.split("T")[0]}
            isHandiCap={car.isHandiCap}
          />
        ))}
      </div>
    </div>
  );
}

export default CarLocator;
