import React, { Component, Suspense } from 'react';
import { Provider ,observer,inject } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
import { Router,Switch, Route,Redirect } from 'react-router'
import './App.css';
import routers from './router/router';
import Menus from './Menu';
import NotFound from './NotFound/index';
import { Layout, Icon, Spin } from 'antd';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

const RouteWithSubRoutes = route => (//这是循环递归路由，暂不使用；
    <Route
        exact
        path={route.path}
        render={props =>{
            return (
                <route.component {...props} routes={route.routes} />
            )
        }}
    />
);

@inject("store") @observer
class App extends Component {

    toggle = () => {
        // this.setState({
        //     collapsed: !this.state.collapsed,
        // });
    };

    render() {
        const { store:{ title,loggedIn } } = this.props;
        return (
            <Provider {...this.props}>
                <HashRouter>
                    <Route path="/" render={() => (
                        loggedIn ? (
                            <Layout id="components-layout-demo-custom-trigger">
                                <Menus />
                                {/*这是左侧导航栏*/}
                                <Layout>
                                    <Header style={{ background: '#fff', padding: 0 }}>
                                        <Icon
                                            className="trigger"
                                            type={false ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.toggle}
                                        />
                                    </Header>
                                    <Content
                                        style={{
                                            margin: '24px 16px',
                                            padding: 24,
                                            background: '#fff',
                                            minHeight: 280,
                                        }}
                                    >
                                        <Suspense fallback={<Spin tip="Loading..."> </Spin>}>
                                            <Switch>
                                                <Redirect exact from='/' to="/about" />
                                                {routers.map((route, i) => {
                                                    return (!route.hideInMenu)?<Route key={i} exact path={route.path} component={route.component}/>:""
                                                })}
                                                {/*{routers.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}*/}
                                                <Route component={NotFound}/>
                                            </Switch>
                                        </Suspense>
                                    </Content>
                                </Layout>
                            </Layout>
                        ) : (
                            <Suspense fallback={<Spin tip="Loading..."> </Spin>}>
                                <Switch>
                                    <Redirect exact from='/' to="/login" />
                                    <Route path="/login" component={routers[0].component}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </Suspense>
                        )
                    )} />

                </HashRouter>
            </Provider>

        );
    }
}

export default App;
// history={history}