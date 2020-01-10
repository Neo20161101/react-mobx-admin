import React, { Component } from 'react';
import { Provider,observer,inject } from "mobx-react";
import { Link } from 'react-router-dom'

@inject("store") @observer
class App extends Component {

    componentDidMount() {
        this.props.store.title = "全局被更改";
        console.log(this);
    }

    render() {
        const { store:{fetchProjectsSuccess,fetchPro} } = this.props;
        return (
            <div className="App">
                <header>
                    <p className="classs">
                        这是首页
                    </p>
                    <Link to="/about">跳转关于页面</Link>
                    <button type="button" onClick={fetchPro} className='btn'>这是首页</button>
                </header>
            </div>
        );
    }
}


export default App;



