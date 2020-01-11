import React, { Component } from 'react';
import { Provider, observer, inject } from "mobx-react";
import { Link } from 'react-router-dom'

@inject("store") @observer
class App extends Component {

    componentDidMount() {
        this.props.store.title = "全局被更改";
        console.log(this);
    }

    onloginOutClick = () => {
        const { store: { fetchLoginout }, history } = this.props;
        fetchLoginout().then(res => {
            window.location.href = "/login"
        })
    }

    render() {

        return (
            <div className="App">
                <header>
                    <p className="classs">
                        这是首页
                    </p>
                    <Link to="/about">跳转关于页面</Link>
                    <button type="button" onClick={this.onloginOutClick} className='btn'>退出到登陆页</button>
                </header>
            </div>
        );
    }
}


export default App;



