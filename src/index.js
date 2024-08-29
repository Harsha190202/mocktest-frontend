import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import ExamHome from "./Components/ExamHome";
import Login from "./Components/Login";
import Tests from "./Components/Tests";
import Home from "./Components/Home";
import User from "./Components/User";

const Layout = () => (
  <>
    <Outlet />
  </>
);

function App() {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/tests",
            element: <Tests />,
          },
          {
            path: "tests/exam/:id",
            element: <ExamHome />,
          },
          {
            path: "/userinfo",
            element: <User />,
          },
        ],
      },
    ],
    {
      basename: "/mocktest-app",
    }
  );

  return (
    <RouterProvider router={router}>
      <div>
        <Outlet />
      </div>
    </RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
