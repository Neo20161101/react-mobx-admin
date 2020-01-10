import React, { Component, Suspense } from 'react';
import { Provider, observer, inject } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
import { Router, Switch, Route, Redirect } from 'react-router'
import './App.css';
import routers from './router/router';
import Menus from './Menu';
import NotFound from './NotFound/index';
import History from './router/history';
import { Layout, Icon, Spin } from 'antd';
// import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

const RouteWithSubRoutes = route => ( //这是循环递归路由，暂不使用；
    <Route exact path = { route.path }
    render = {props => {
            return (
                <route.component {...props }
                routes = { route.routes }
                />
            )
        }
    }
    />
);

@inject("store") @observer
class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            loggedIn:props.store.loggedIn,
            collapsed:false,
            Menu:[{path:"/login",name: 'Login',icon:"user",hideInMenu:true},{path:"/tacos",name: 'tacos',icon:"user"}]
        }
    }

    componentWillMount () {

    }

    componentDidMount () {
//        const loggedIn = sessionStorage.getItem("loggedIn");
        const { store: { fetchTest } } = this.props;
        fetchTest().then(res=>{
            if(res.code == 200){
                this.props.store.loggedIn = true;
                History.push("#"+routers[1].path);
                this.setState({loggedIn:true,Menu:routers});
            }
        })
    }

    onCollapsedToggleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
            const { loggedIn,collapsed,Menu } = this.state;
            console.log("loggedIn,",loggedIn)
            return (
                <Provider {...this.props }>
                <HashRouter>
                <Route path = "/" render = {() => (
                        loggedIn ? (
                            <Layout id = "components-layout-demo-custom-trigger" >
                                <Menus routers={Menu} collapsed={collapsed} /> { /*这是左侧导航栏*/ }
                                <Layout>
                                <Header style = {{ background: '#fff', padding: 0 }}>
                                <Icon className = "trigger"
                                    type = { collapsed ? 'menu-unfold' : 'menu-fold' }
                                    onClick = { this.onCollapsedToggleClick }/>
                                </Header>
                                    <Content style = {
                                    {
                                        margin: '24px 16px',
                                        padding: 24,
                                        background: '#fff',
                                        minHeight: 280,
                                    }}>
                                <Suspense fallback = { < Spin tip = "Loading..." > </Spin>}>
                                    <Switch>
                                        <Redirect exact from = '/' to = {Menu[1].path} />
                                            {
                                                routers.map(route => {
                                                    return (!route.hideInMenu) ?
                                                        <Route key = { route.path } exact path = { route.path } component = { route.component } />:null
                                                })
                                            }
                                            {
                                                /*{routers.map((route, i) =>
                                                <RouteWithSubRoutes key={i} {...route} />)}*/
                                            }
                                            <Route component = { NotFound } />
                                    </Switch >
                                </Suspense>
                                    </Content >
                                </Layout>
                            </Layout >):
                            (
                                <Suspense fallback = { < Spin tip = "Loading..." > </Spin>}>
                                    <Switch>
                                        <Redirect exact from = '/' to = "/login" />
                                        <Route path = "/login" component = { routers[0].component }/>
                                        <Route component = { NotFound }/>
                                    </Switch >
                                </Suspense>
                                )
                            )
                        }/>
                        </HashRouter>
                </Provider >);
                }
            }

export default App;