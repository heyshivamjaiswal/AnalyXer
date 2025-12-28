import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./pages/Body";
import Analyze from "./pages/Analyze";
import Home from "./pages/Home";
import AlterEgo from "./components/AlterEgo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          { index: true, element: <Home /> },
          { path: "analyze/:username", element: <Analyze /> },
          { path: "alter-ego/:username", element: <AlterEgo /> }, // 🔥 ADD THIS
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
