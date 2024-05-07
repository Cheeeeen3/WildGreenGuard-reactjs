import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer.tsx'
import Home from './components/Home.tsx'
import Info from './components/Info.tsx'
import { NavBar } from './components/NavBar.tsx'
import React from 'react'
// FC type from React

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/info',
        element: <Info />
      }
    ]
  }
])

const App: React.FC = () => {

  return (
    <RouterProvider router={route} fallbackElement={<p>Loading ... </p>} />
  )
}

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
};


export default App