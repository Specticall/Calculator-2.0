import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support";
import CalculatorDisplay from "./pages/CalculatorDisplay";
import Success from "./pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalculatorDisplay />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
