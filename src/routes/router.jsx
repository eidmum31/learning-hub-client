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
                element:<Category></Category>,
                loader:()=>fetch(`http://127.0.0.1:8080/category/0`)
            }
            ,

            {
                path:"/category/:id",
                element:<Category></Category>,
                loader:({params})=>fetch(`http://127.0.0.1:8080/category/${params.id}`)
            }
        ]
    }
  ]);
  export default router;