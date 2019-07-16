import React, {Component} from 'react';
import routers from './router/router';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class Menus extends Component{
    render(){
        return(
            <Sider breakpoint="sm"
                   collapsedWidth="0"
                   onBreakpoint={broken => {
                       console.log(broken);
                   }}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {routers.map(function (route, i) {
                        return <Menu.Item key={i} as={Link} to={route.path}>
                            <Link to={route.path}><Icon type="user" />{route.name}</Link>
                        </Menu.Item>
                    })}
                </Menu>
            </Sider>
        )
    }
}

export default Menus;