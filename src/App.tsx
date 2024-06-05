import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as InfoLoader } from "./components/Info.tsx";
import { store } from "./components/Store.tsx";
import { Provider } from "react-redux";

import "./App.css";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import Info from "./components/Info.tsx";
import { NavBar } from "./components/NavBar.tsx";
import React from "react";
import Login from "./components/Login.tsx";
import SignUp from "./components/SignUp.tsx";
// FC type from React

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/info",
        element: <Info />,
        loader: InfoLoader,
      },
      {
        path: "/Login",
        element: <Login />,
        // children: []
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={route} fallbackElement={<p>Loading ... </p>} />
    </Provider>
  );
};

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
