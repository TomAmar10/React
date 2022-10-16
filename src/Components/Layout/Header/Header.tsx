import { useEffect, useState } from "react";
import "./Header.css";

function Header(): JSX.Element {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const myInterval = setInterval(() => {
      const myTime = new Date().toLocaleTimeString();
      console.log(myTime);
      setTime(myTime);
    }, 1000);
  }, []);

  return (
    <div className="Header">
      <div className="headLine">Home Work</div>
      <span>{time}</span>
    </div>
  );
}

export default Header;
