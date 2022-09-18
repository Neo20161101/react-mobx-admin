import React, { lazy } from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Index from "@/view/home/home";
import ErrorPage from "../notFound/error-page";
const Test = lazy(() => import('@/view/test/test'));
// import NotFound from './notFound/404';
// const Register = lazy(() => import('@/view/User/Register/index'));
// const Login = lazy(() => import('@/view/User/Login/index'));
const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
        errorElement: <ErrorPage />, // 发生错误页面
        children: [
            {
                path: "test",
                element: <Test />,
                loader: async (option) => {
                    console.log('loaderloaderloader,',option);
                }, // 装载器
            },
        ],
    },
    {
        path:"/asd",
        element: <div>asd21434535436576</div>,
    }
]);

export { Routes }
