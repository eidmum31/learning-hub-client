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
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<>
             <Banner></Banner>
             <Choices></Choices>
            
            </>
        }
  
      ]
    },
    {
        path:"/category",
        element:<CourseLayout></CourseLayout>,
        children:[
            {
                path:'/category',
                element:<h1>heeloooooooooooo</h1>
            }
            ,

            {
                path:"/category/:id",
                element:<Category></Category>
            }
        ]
    }
  ]);
  export default router;