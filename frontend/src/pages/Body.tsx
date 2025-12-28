import { Outlet } from "react-router-dom";

function Body() {
  console.log("Body rendered");

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Body;
