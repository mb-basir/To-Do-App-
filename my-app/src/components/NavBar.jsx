import { useEffect, useState } from "react";

export function NavBar() {
  return (
    <div className=" flex justify-between mx-15 my-7 text-lg font-semibold">
      <h2>✔️Your daily tasks...</h2>
      {/* <h2 className=" xl:block sm:hidden">💎Time is gold💎</h2> */}
      <div>
        <Clock />
      </div>
    </div>
  );
}
export default NavBar;

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(function () {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // const now = new Date();
  const weekday = now.toLocaleDateString("en-UK", { weekday: "short" });
  const month = now.toLocaleDateString("en-UK", { month: "long" });
  const day = `${now.getDate()}`.padStart(2, 0);
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  // const sec = `${now.getSeconds()}`.padStart(2, 0);
  return (
    <>
      <span className="px-6">
        🗓️{weekday}, {month} {day}
      </span>
      <span>
        ⏰{hour}:{min}
      </span>
    </>
  );
}
