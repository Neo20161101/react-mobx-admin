import React, { lazy } from 'react';
import Fetch from "./service";

console.log("这是routerss")

// Fetch("/users/test", "post", body).then(res=>{

// })
const Register = lazy(() => import('../User/Register/index'));
export default [

    {
        path: "/login",
        name: 'Login',
        icon: "user",
        hideInMenu: true,
        component: lazy(() => import('../User/Login/index'))
    },
    {
        path: "/tacos",
        name: 'tacos',
        icon: "home",
        component: lazy(() => import('../home/home/index')),
    },
    {
        path: "/tac",
        name: 'tac',
        icon: "user",
        routes: [
            {
                path: "/tac/bus",
                name: "/tac/bus",
                icon: null,
                component: lazy(() => import('../About/About/index')),
                routes: [
                    {
                        path: "/tac/bus/bus2",
                        name: "/tac/bus/bus2",
                        icon: null,
                        component: lazy(() => import('../About/About/index'))
                    },
                    {
                        path: "/tac/bus/bus3",
                        name: "/tac/bus/bus3",
                        icon: null,
                        component: lazy(() => import('../About/About/index'))
                    }
                ]
            },
            {
                path: "/tac/cart",
                name: "/tac/Cart",
                icon: null,
                component: lazy(() => import('../About/About/index'))
            }
        ]
    },
    {
        path: "/about",
        name: 'About',
        icon: "user",
        component: lazy(() => import('../About/About/index'))
    }
]