import React, { lazy } from 'react';




const TodoView = lazy(() => import('../home/home/index'));
const About = lazy(() => import('../About/About/index'));
const Register = lazy(() => import('../User/Register/index'));
export default [
    {
        path: "/login",
        name: 'Login',
        icon:"user",
        hideInMenu:true,
        component: Register
    },
    {
        path: "/about",
        name: 'About',
        icon:"user",
        component: About
    },
    {
        path: "/tacos",
        name: 'Tacos',
        icon:"home",
        component: TodoView,
        routes: [
            {
                path: "/tacos/bus",
                name: "/tacos/bus",
                icon:"user",
                component: About,
                routes: [
                    {
                        path: "/tacos/bus/bus2",
                        name: "/tacos/bus/bus2",
                        icon:"user",
                        component: About
                    },
                    {
                        path: "/tacos/bus/bus3",
                        name: "/tacos/bus/bus3",
                        icon:"user",
                        component: About
                    }
                ]
            },
            {
                path: "/tacos/cart",
                name: "/tacos/Cart",
                icon:"user",
                component: About
            }
        ]
    }
]