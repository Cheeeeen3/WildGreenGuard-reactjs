import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as InfoLoader } from "./components/Info.tsx";
import { store } from "./components/Store.tsx";
import { Provider } from "react-redux";
import { Suspense } from "react";

import "./App.css";
import './index.css';
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import Info from "./components/Info.tsx";
import NavBar, { userLoader } from "./components/NavBar.tsx";
import React from "react";
import Login from "./components/Login.tsx";
import SignUp from "./components/SignUp.tsx";
import Team from "./components/Team.tsx";
import ErrorPage from "./ErrorPage.tsx";

import Chatroom from "./components/Chatroom.tsx";
// FC type from React

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    // loader: userLoader,
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
      {
        path: "/Team",
        element: <Team />},
      { 
        path: "/Chatroom",
        element: <Chatroom />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={route} fallbackElement={<p>Loading ... </p>} />
      </Suspense>
    </Provider>
  );
};

function Layout() {
  return (
    <>
      <NavBar />
      <main className="min-h-dvh"><Outlet /></main>
      <Footer />
    </>
  );
}

export default App
