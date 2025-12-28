import { Outlet } from "react-router-dom";

function App() {
  console.log("App rendered");

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
