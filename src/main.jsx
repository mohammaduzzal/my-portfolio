import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Main/MainLayout';
import Home from './page/Home';
import ProjectDetails from './component/ProjectDetails';


const router = createBrowserRouter([
 {
  path:'/',
  element:<MainLayout></MainLayout>,
  children:[
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/project-details/:id',
      element: <ProjectDetails></ProjectDetails>,
    },
  ]
 }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
