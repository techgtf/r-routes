import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppComponents from './Index.Js'
import Layout from './Layout'

const { Home, About, PageNotFound, User, Github, GithubInfoLoader } = AppComponents;

// const router = createBrowserRouter([
//   {
//     path: "/", element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "user/:userid", element: <User /> },
//       { path: "*", element: <PageNotFound /> }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/r-routes/'
      element={<Layout />}
    >
      <Route
        path=''
        element={<Home />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='*'
        element={<PageNotFound />}
      />
      <Route
        path='user/:userid'
        element={<User />}
      />
      <Route
        loader={GithubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
