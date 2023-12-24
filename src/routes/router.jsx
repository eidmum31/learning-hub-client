import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import MainLayout from "../layout/MainLayout";
import Choices from "../pages/Home/Choices/Choices";


import Course from "../pages/Course/Category/Category";
import CourseLayout from "../layout/CourseLayout";
import Category from "../pages/Course/Category/Category";
import Banner from "../pages/shared/Banner/Banner";
import SpecificCourseLayout from "../layout/SpecificCourseLayout";
import Details from "../pages/SpecificCourse/Details/Details";
import Login from "../pages/Login/Login";
import Reg from "../pages/Reg/Reg";
import CheckoutLayout from "../layout/checkoutLayout";
import Protected from "./Protected";
import Checkout from "../pages/Checkout/Checkout";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<>
             <Banner></Banner>
             <Choices></Choices>
            
            </>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/reg",
          element:<Reg></Reg>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
  
      ]
    },
    {
        path:"/category",
        element:<CourseLayout></CourseLayout>,
        children:[
            {
                path:'/category',
                element:<Category></Category>,
                loader:()=>fetch(`http://127.0.0.1:8080/category/0`)
            }
            ,

            {
                path:"/category/:id",
                element:<Category></Category>,
                loader:({params})=>fetch(`http://127.0.0.1:8080/category/${params.id}`)
            },
      
        ]
    },
    {
      path:"/course",
      element:<SpecificCourseLayout></SpecificCourseLayout>,
      children:[
        {
          path:'/course/:id',
          element:<Details></Details>,
          loader:({params})=>fetch(`http://127.0.0.1:8080/course/${params.id}`)
        }
      ]
    },
    {
      path:'/checkout/:id',
      element:<Protected><CheckoutLayout></CheckoutLayout></Protected>,
      loader:({params})=>fetch(`http://127.0.0.1:8080/course/${params.id}`)
    }
  ]);
  export default router;