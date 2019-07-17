import React, { lazy } from 'react';




const TodoView = lazy(() => import('../home/home/index'));
const About = lazy(() => import('../About/About/index'));
export default [
    {
        path: '/',
        name: '首页',
        icon:"home",
        component: TodoView
    },
    {
        path: '/page/about',
        name: '关于我们',
        icon:"user",
        component: About
    }
]