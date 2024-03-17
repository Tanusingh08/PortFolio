import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Components/ViewerName/RootLayout.jsx";
import NamePage from "./Components/ViewerName/NamePage";
import Information from "./Components/MyDetailsFolder/Information.jsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <NamePage /> },
      {
        path: "Info",
        element: <Information />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
