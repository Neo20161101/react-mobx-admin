import React, { Component } from 'react';
import About from "../../App";
import { observer,inject } from 'mobx-react'

@inject("store","AboutStore") @observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    fetchProjectsSuccess = () => {
        console.log(this.props);
    }

    render() {
        return (
            <div className="App" ref="textInput">
                <header>
                    <p>
                        这是输入框
                    </p>
                    <button type="button" onClick={this.fetchProjectsSuccess} className='btn'>添加</button>
                </header>
            </div>
        );
    }
}


export default App;
