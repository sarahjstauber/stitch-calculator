import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from "./pages/About";
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
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
