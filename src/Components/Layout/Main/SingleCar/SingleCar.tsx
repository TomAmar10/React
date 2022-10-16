import SingleCarData from "../../../../Models/SingleCarData";
import "./SingleCar.css";

function SingleCar(props: SingleCarData): JSX.Element {
  return (
    <div className="SingleCar">
      <h3>{props.mispar_rechev}</h3>
      <span>{props.tozeret_nm}</span> <br />
      <span>{props.kinuy_mishari}</span> <br />
      <span>{props.tzeva_rechev}</span> <br />
      <span>{props.shnat_yitzur}</span> <br />
      <span>{props.tokef_dt}</span> <br />
      <span>{props.isHandiCap}</span> <br />
    </div>
  );
}

export default SingleCar;
