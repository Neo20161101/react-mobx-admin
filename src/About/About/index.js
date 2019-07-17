import React, { Component } from 'react';
import { Provider,observer,inject } from "mobx-react";
import Input from '../../.components/input/input';
import Store from "../stores/store";
import '../style/style.css';

const ref = React.createRef();

@inject("store") @observer
class App extends Component {

    render() {
        const { store:{fetchProjectsSuccess,fetchPro} } = this.props;
        return (
            <Provider AboutStore={Store}>
                <div className="App">
                    <header>
                        <p className="classs">
                            这是关于
                        </p>
                        <button type="button" className='btn' onClick={fetchProjectsSuccess}>更改全局store</button>
                    </header>
                    <Input ref={ref}/>
                </div>
            </Provider>
        );
    }
}


export default App;



