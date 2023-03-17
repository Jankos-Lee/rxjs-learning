import { createRoot } from "react-dom/client";
import React from "react";

const HOURS = new Date().getHours();
const MINUTES = new Date().getMinutes();
const SECONDS = new Date().getSeconds();

function Clock() {
  const [hours, setHours] = React.useState(HOURS);
  const [minutes, setMinutes] = React.useState(MINUTES);
  const [seconds, setSeconds] = React.useState(SECONDS);
  const [time, setTime] = React.useState(`${HOURS} : ${MINUTES} : ${SECONDS}`);
  setInterval(() => {
    setHours(new Date().getHours());
    setMinutes(new Date().getMinutes());
    setSeconds(new Date().getSeconds());
  }, 1000);
  return (
    <div>
      <div>{time}</div>
      <div>
        现在是：{hours} : {minutes} : {seconds}
      </div>
    </div>
  );
}
const renderDom = document.getElementById("root");
if (renderDom) {
  const root = createRoot(document.getElementById("root"));
  root.render(<Clock />);
}

export default {};
