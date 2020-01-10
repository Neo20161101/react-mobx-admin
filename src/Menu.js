import React, {Component} from 'react';
import routers from './router/router';
import { Provider ,observer,inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import Logo from "./logo.svg";
const { Header, Sider, Content } = Layout;


const { SubMenu } = Menu;
const RouteWithSubRoutes = route => { //这是循环递归路由；
    return route.map(item => {
           if(item.routes){
            return (
              <SubMenu key={item.path}
                title={
                  <span> 
                    <Icon type={item.icon} />
                    <span>{item.name}</span>
                  </span>
                } >
                {RouteWithSubRoutes(item.routes)}
              </SubMenu>
            )
        }
        return ((!item.hideInMenu) ?
               <Menu.Item key={item.path}>
                   <Link to={item.path}><Icon type={item.icon} />{item.name}</Link>
               </Menu.Item>:null)          
    })
};


@inject("store") @observer
class Menus extends Component{
    constructor(props){
        super(props);
        this.state = {
            SelectedKey:["/tacos"]
        }
    }

    componentWillMount() {
        const str = window.location.hash.match(/#(\S*)/)[1];
        this.setState({SelectedKey:[str]});
    }

    componentDidMount() {
//        const str = window.location.hash.match(/#(\S*)/);
    }

    render(){
        const {SelectedKey} = this.state;
        const { collapsed,routers } = this.props;
        
        
        return(
                <Sider breakpoint="sm"
                    collapsedWidth="0"
                    trigger={null}
                    collapsed={collapsed}
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}>
                    <div className="logo"><img src={Logo} alt="logo"/>后台管理</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={SelectedKey}>
                        {
                            RouteWithSubRoutes(routers)
                        }
                    </Menu>
                </Sider>
        )
    }
}

export default Menus;