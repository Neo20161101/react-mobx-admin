import React, {Component, Suspense} from 'react';
import {Provider, observer, inject} from "mobx-react";
// import {Link, BrowserRouter} from 'react-router-dom';
import {Router, Switch, Route, Redirect} from 'react-router';
import {Layout, Icon, Spin,Tabs} from 'antd';
import {Routes} from '@/router/router';
import NotFound from '@/NotFound/index';
import Menus from '@/Menu';

const {Header, Content} = Layout;

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
            collapsed: false,
            Menu: [{path: "/tacos", name: 'tacos', icon: "user"}]
        }
    }

    componentDidMount() {
        const {store: {fetchMenu}, history} = this.props;
        fetchMenu().then(res => {
            if (res.code == 200) {
                const {data} = res;
                this.props.store.loggedIn = true;
                // History.push(routers[0].path);//采用 HashRouter path前面加上 #
                this.setState({loggedIn: true, Menu: data});
            } else {
                //window.location.href = "/login";
                this.props.store.loggedIn = false;
                history.push("/login");
            }
        })
    }

    onCollapsedToggleClick = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const {collapsed, Menu} = this.state;
        const pathname = window.location.pathname;//采用 BrowserRouter 路由（需要服务端配置路由）
        console.log()
        return (
            <Layout id="components-layout-demo-custom-trigger">
                <Menus routers_menu={Menu} collapsed={collapsed} pathname={pathname}/> { /*这是左侧导航栏*/}
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon className="trigger"
                              type={collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.onCollapsedToggleClick}/>
                    </Header>
                    <div>sadsad</div>
                    <Content style={
                        {
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}>
                        <Suspense fallback={< Spin tip="Loading..."> </Spin>}>
                            <Switch>
                                {
                                    RouteWithSubRoutes(Routes)
                                }
                                <Redirect exact from='/' to={Menu[0].path}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;



