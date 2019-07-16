import React, { Component } from 'react';
import { Provider,observer,inject } from "mobx-react";

@inject("store") @observer
class App extends Component {

    render() {
        console.log(this);
        const { store:{fetchProjectsSuccess,fetchPro} } = this.props;
        return (
            <div className="App">
                <header>
                    <p className="classs">
                        这是关于这是首页
                    </p>
                    <a href="/page/about">跳转关于页面</a>
                    <button type="button" onClick={fetchPro} className='btn'>这是首页</button>
                </header>
            </div>
        );
    }
}


export default App;



