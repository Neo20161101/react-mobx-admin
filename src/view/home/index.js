import React, {Component, Suspense} from 'react';
import {Provider, observer, inject} from "mobx-react";
// import {Link, BrowserRouter} from 'react-router-dom';
import {Router, Switch, Route, Redirect} from 'react-router';
import {Layout, Icon, Spin,Tabs,Breadcrumb} from 'antd';
import {Routes} from '@/router/router';
import NotFound from '@/NotFound/index';
import Menus from '@/Menu';
import './style.less';

const {Header, Content} = Layout;
const { TabPane } = Tabs;

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
            Menu: [{path: "/tacos", name: 'tacos', icon: "user"}],
            activeKey:'1'
        }
        this.newTabIndex = 0;
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
    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.props.store.todos.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.props.store.todos.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.props.store.todos = panes;
        this.setState({ panes, activeKey });
    };

    render() {
        const {collapsed, Menu} = this.state;
        const { store:{todos} } = this.props;
        const pathname = window.location.pathname;//采用 BrowserRouter 路由（需要服务端配置路由）
        //todos.finished
        console.log(this.props.store)
        // this.props.store.todos.filter(todo => {
        //     console.log(this.props.store.todos)
        // })

        return (
            <Layout id="components-layout-demo-custom-trigger">
                <Menus routers_menu={Menu} collapsed={collapsed} pathname={pathname}/> { /*这是左侧导航栏*/}
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon className="trigger"
                              type={collapsed ? 'menu-unfold' : 'menu-fold'}
                              onClick={this.onCollapsedToggleClick}/>
                    </Header>
                    <div style={{borderBottom:'1px solid #e6e6e6'}}>
                        <Tabs
                            hideAdd
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
                            {todos.map(pane => (
                                <TabPane tab={pane.title} key={pane.key}>
                                    <div style={{backgroundColor:'#fff',padding:'20px'}}>
                                        <Breadcrumb separator=">">
                                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                                            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                                            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                                            <Breadcrumb.Item>{pane.content}</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    </div>
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



