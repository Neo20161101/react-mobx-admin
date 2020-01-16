import React, { lazy } from 'react';

const Index = lazy(() => import('@/view/home/index'));
const Register = lazy(() => import('@/view/User/Register/index'));
const Login = lazy(() => import('@/view/User/Login/index'));
const Routes = [
    {
        path: "/tacos",
        name: 'tacos',
        icon: "home",
        component: lazy(() => import('@/view/tacos/index'))
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
                component: lazy(() => import('@/view/About/About/index')),
                routes: [
                    {
                        path: "/tac/bus/bus2",
                        name: "/tac/bus/bus2",
                        icon: null,
                        component: lazy(() => import('@/view/About/About/index'))
                    }
                ]
            },
            {
                path: "/tac/cart",
                name: "/tac/Cart",
                icon: null,
                component: lazy(() => import('@/view/About/About/index'))
            }
        ]
    },
    {
        path: "/about",
        name: '关于',
        icon: "user",
        component: lazy(() => import('@/view/About/About/index'))
    }
]

export { Index,Routes,Login }
