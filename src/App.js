import React, { Component, Suspense } from 'react';
import { Provider, observer, inject } from 'mobx-react'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { Router, Switch, Route, Redirect } from 'react-router'
import './App.css';
import routers from './router/router';
import Menus from './Menu';
import NotFound from './NotFound/index';
// import History from './router/history';
import { Layout, Icon, Spin } from 'antd';

const { Header, Sider, Content } = Layout;

const RouteWithSubRoutes = Menu =>  //这是循环递归路由；
{
    return Menu.map(item => {
        if (item.routes) {
            return (
                RouteWithSubRoutes(item.routes)
            )
        }
        return ((!item.hideInMenu) ?
            <Route key={item.path} exact path={item.path}
                render={props => {
                    return (
                        <item.component {...props} />
                    )
                }
                }
            /> : null)
    })
}

@inject("store") @observer
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: props.store.loggedIn,
            collapsed: false,
            Menu: [{ path: "/login", name: 'Login', icon: "user", hideInMenu: true }, { path: "/tacos", name: 'tacos', icon: "user" }]
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        //        const loggedIn = sessionStorage.getItem("loggedIn");
        const { store: { fetchTest } } = this.props;
        fetchTest().then(res => {
            if (res.code == 200) {
                this.props.store.loggedIn = true;
                // History.push(routers[1].path);//采用 HashRouter path前面加上 #
                this.setState({ loggedIn: true, Menu: routers });
            } else {
                // window.location.href = "/login";
                this.props.store.loggedIn = false;
                // History.push("/login");
                this.setState({ loggedIn: false });
            }
        })
    }

    onCollapsedToggleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { loggedIn, collapsed, Menu } = this.state;
        console.log("loggedIn,", loggedIn)
        if (loggedIn) {
            return (
                <Provider {...this.props}>
                    <BrowserRouter>
                        <Route path="/" render={() => (
                            <Layout id="components-layout-demo-custom-trigger" >
                                <Menus routers={Menu} collapsed={collapsed} /> { /*这是左侧导航栏*/}
                                <Layout>
                                    <Header style={{ background: '#fff', padding: 0 }}>
                                        <Icon className="trigger"
                                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.onCollapsedToggleClick} />
                                    </Header>
                                    <Content style={
                                        {
                                            margin: '24px 16px',
                                            padding: 24,
                                            background: '#fff',
                                            minHeight: 280,
                                        }}>
                                        <Suspense fallback={< Spin tip="Loading..." > </Spin>}>
                                            <Switch>
                                                <Redirect exact from='/' to={Menu[1].path} />
                                                <Redirect exact from='/login' to={Menu[1].path} />
                                                {
                                                    RouteWithSubRoutes(Menu)
                                                }
                                                <Route component={NotFound} />
                                            </Switch >
                                        </Suspense>
                                    </Content >
                                </Layout>
                            </Layout >)

                        } />
                    </BrowserRouter>
                </Provider>
            );
        }
        return (
            <Provider {...this.props}>
                <BrowserRouter>
                    <Route path="/" render={() => (
                        <Suspense fallback={< Spin tip="Loading..." > </Spin>}>
                            <Switch>
                                <Route exact path="/login" component={routers[0].component} />
                                <Redirect exact from='/' to="/login" />
                                <Route component={NotFound} />
                            </Switch >
                        </Suspense>
                    )
                    } />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;