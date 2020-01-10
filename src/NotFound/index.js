import React, { Component } from 'react';
import { Provider, observer, inject } from 'mobx-react'

@inject("store") @observer
class App extends Component {

    componentWillMount () {
//        const { store: { loggedIn },history } = this.props;
    }
    
    componentDidMount() {
//        const { store: { loggedIn },history } = this.props;
//        !loggedIn && history.push("/login");
    }
    render() {
        return (
            <div className="App">
                <header>
                    <div>
                        404
                    </div>
                </header>
            </div>
        );
    }
}


export default App;



