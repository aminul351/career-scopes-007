import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './pages/Roots/Roots';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import WhyUs from './pages/WhyUs/WhyUs';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Insight from './pages/Insight/Insight';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import CatDetails from './pages/Categories/CatDetails';
import SubCatDetails from './pages/Categories/SubCatDetails';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Roots/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/insight',
        element: <Insight />

      },
      
    
      {
        path: '/whyUs',
        element: <WhyUs />

      },
      {
        path: '/categories',
        element: <Categories />

      },
      {
        path: '/categories/:id',
        element: <PrivateRoute><CatDetails /></PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch('/simple.json'); // Fetch the whole JSON file
          const data = await response.json();
          return data.find(category => category.id === params.id); // Find the matching category
        }
      },
      {
        path: '/categories/:id/:subId',
        element: <SubCatDetails />,
        loader: async ({ params }) => {
          const response = await fetch('/simple.json');
          const data = await response.json();
          const category = data.find(cat => cat.id === params.id);
          return category ? category.sub_cat.find(sub => sub.id === params.subId) : null
        },
      },

      
      {
        path: '/login',
        element: <Login></Login>

      },

      {
        path: '/register',
        element: <Register />
      },
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
