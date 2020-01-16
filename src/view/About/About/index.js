import React, { Component } from 'react';
import { Provider,observer,inject } from "mobx-react";
import Input from '@/.components/input/input';
import Store from "../stores/store";
import '../style/style.css';

@inject("store") @observer
class App extends Component {
    
    fetchPro = () => {
        this.props.store.title = "也会更改"
    }

    render() {
        const { store:{title} } = this.props;
        console.log("this.props,",this.props)
        return (
            <Provider AboutStore={Store}>
                <div className="App">
                    <header>
                        <p className="classs">
                            这是关于:{title}
                        </p>
                        <button type="button" className='btn' onClick={this.fetchPro}>更改全局store</button>
                    </header>
                    <Input />
                </div>
            </Provider>
        );
    }
}


export default App;



