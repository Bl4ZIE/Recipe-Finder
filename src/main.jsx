import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetails from './Components/ReceipieDeatails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/recipes/:id",
    element: <RecipeDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

