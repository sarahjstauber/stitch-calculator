import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from "./pages/About";
import { Calculator } from "./pages/Calculator";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
