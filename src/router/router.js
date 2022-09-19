import React, { lazy } from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import Index from "@/view/home/home";
const ErrorPage = lazy(() => import('../notFound/error-page'));
const Test = lazy(() => import('@/view/test/test'));
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
                    // 跳转路由前 逻辑操作
                }, // 装载器
            }
        ],
    }
]);

export { Routes }
