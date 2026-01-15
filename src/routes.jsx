import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contribute from "./Contribute/Contribute.jsx";
import Layout from "./layout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home /> },
      { path: "contribute", element: <Contribute /> },
    ]
  }
]);
