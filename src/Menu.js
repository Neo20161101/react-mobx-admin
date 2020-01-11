import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Logo from "./logo.svg";
const { Header, Sider, Content } = Layout;


const { SubMenu } = Menu;
const RouteWithSubRoutes = route => { //这是循环递归菜单；
    return route.map(item => {
        if (item.routes) {
            return (
                <SubMenu key={item.path}
                    title={
                        <span>
                            {item.icon ? <Icon type={item.icon} /> : null}
                            <span>{item.name}</span>
                        </span>
                    } >
                    {RouteWithSubRoutes(item.routes)}
                </SubMenu>
            )
        }
        return ((!item.hideInMenu) ?
            <Menu.Item key={item.path}>
                <Link to={item.path}>{item.icon ? <Icon type={item.icon} /> : null}<span>{item.name}</span></Link>
            </Menu.Item> : null)
    })
};


@inject("store") @observer
class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SelectedKey: ["/tacos"],
            openKeys: null
        }
    }

    componentWillMount() {
        // const str = window.location.hash.match(/#(\S*)/)[1];//采用 HashRouter 路由
        const str = window.location.pathname;//采用 BrowserRouter 路由（需要服务端配置路由返回）
        const openKeys = sessionStorage.getItem("openKeys");
        let data = [];
        openKeys && (data = openKeys.split(","));
        this.setState({ SelectedKey: [str], openKeys: data });
    }

    componentDidMount() {
        //        const str = window.location.hash.match(/#(\S*)/);
    }

    onOpenChangeClick = (openKeys) => {
        sessionStorage.setItem("openKeys", openKeys)
    }

    render() {
        const { SelectedKey, openKeys } = this.state;
        const { collapsed, routers } = this.props;
        return (
            <Sider breakpoint="sm"
                trigger={null}
                collapsible
                collapsed={collapsed}
                onBreakpoint={broken => {
                    // console.log(broken);
                }}>
                <div className="logo"><img src={Logo} alt="logo" /></div>
                <Menu theme="dark" mode="inline" onOpenChange={this.onOpenChangeClick} defaultOpenKeys={openKeys} defaultSelectedKeys={SelectedKey}>
                    {
                        RouteWithSubRoutes(routers)
                    }
                </Menu>
            </Sider>
        )
    }
}

export default Menus;