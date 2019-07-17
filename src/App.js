import React, { Component, Suspense } from 'react';
import { Provider ,observer,inject } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
import { Router,Switch, Route } from 'react-router'
import './App.css';
import routers from './router/router';
import Menus from './Menu';
import NotFound from './NotFound/index';
import { Layout, Icon, Spin } from 'antd';
import 'antd/dist/antd.css';

const { Header, Sider, Content } = Layout;

@inject("store") @observer
class App extends Component {

    toggle = () => {
        // this.setState({
        //     collapsed: !this.state.collapsed,
        // });
    };

    render() {
        const { store:{ title } } = this.props;
        return (
            <Provider {...this.props}>
                <HashRouter>
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
                                        {routers.map((route, i) => {
                                            return <Route key={i} exact path={route.path} component={route.component}/>
                                        })}
                                        <Route component={NotFound}/>
                                    </Switch>
                                </Suspense>
                            </Content>
                        </Layout>
                    </Layout>
                </HashRouter>
            </Provider>

        );
    }
}

export default App;
// history={history}