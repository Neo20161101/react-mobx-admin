import React, { Component } from 'react';
import About from "../../App";
import { observer,inject } from 'mobx-react'

const app = inject("store","AboutStore")(observer(
    class App extends Component {

        fetchProjectsSuccess = () => {
            console.log(this.props);
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
));


export default app;
