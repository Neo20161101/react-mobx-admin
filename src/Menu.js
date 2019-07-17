import React, {Component} from 'react';
import routers from './router/router';
import { Provider ,observer,inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import Logo from "./logo.svg";
const { Header, Sider, Content } = Layout;

@inject("store") @observer
class Menus extends Component{
    constructor(props){
        super(props);
        this.state = {
            SelectedKey:["/"]
        }
    }

    componentWillMount() {
        const str = window.location.hash.match(/#(\S*)/)[1];
        this.setState({SelectedKey:[str]});
    }

    componentDidMount() {
        //console.log(window.location)
    }

    render(){
        const {SelectedKey} = this.state;
        return(
            <Sider breakpoint="sm"
                   collapsedWidth="0"
                   onBreakpoint={broken => {
                       console.log(broken);
                   }}>
                <div className="logo"><img src={Logo} alt="logo"/>后台管理</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={SelectedKey}>
                    {routers.map(function (route, i) {
                        return <Menu.Item key={route.path}>
                            <Link to={route.path}><Icon type={route.icon} />{route.name}</Link>
                        </Menu.Item>
                    })}
                </Menu>
            </Sider>
        )
    }
}

export default Menus;