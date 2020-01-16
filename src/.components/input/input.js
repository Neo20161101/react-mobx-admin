import React, { Component } from 'react';
import About from "../../App";
import { observer,inject } from 'mobx-react';
import axios from 'axios';

@inject("store","AboutStore") @observer
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    fetchProjectsSuccess = () => {
        axios.post('http://zhangr.free.idcfengye.com/xcx/mall/list', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App">
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
