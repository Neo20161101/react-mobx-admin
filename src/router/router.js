import React, { lazy } from 'react';

const Register = lazy(() => import('../User/Register/index'));
export default [
    
    {
        path: "/login",
        name: 'Login',
        icon:"user",
        hideInMenu:true,
        component: lazy(() => import('../User/Login/index'))
    },
    {
        path: "/tacos",
        name: 'Tacos',
        icon:"home",
        component: lazy(() => import('../home/home/index')),
        routes: [
            {
                path: "/tacos/bus",
                name: "/tacos/bus",
                icon:"user",
                component: lazy(() => import('../About/About/index')),
                routes: [
                    {
                        path: "/tacos/bus/bus2",
                        name: "/tacos/bus/bus2",
                        icon:"user",
                        component: lazy(() => import('../About/About/index'))
                    },
                    {
                        path: "/tacos/bus/bus3",
                        name: "/tacos/bus/bus3",
                        icon:"user",
                        component: lazy(() => import('../About/About/index'))
                    }
                ]
            },
            {
                path: "/tacos/cart",
                name: "/tacos/Cart",
                icon:"user",
                component: lazy(() => import('../About/About/index'))
            }
        ]
    },
    {
        path: "/about",
        name: 'About',
        icon:"user",
        component: lazy(() => import('../About/About/index'))
    }
]