import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx';
import Home from "./pages/Home.jsx"
import ThemeContextProvider from './context/ThemeContextProvider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}>
       
      </RouterProvider>
    </ThemeContextProvider>
  </StrictMode>
);
