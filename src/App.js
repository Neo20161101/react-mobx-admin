import React, { Component, Suspense } from 'react';
import { Provider, observer, inject } from 'mobx-react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Index,Routes,Login } from './router/router';
import NotFound from './NotFound/index';
// import History from './router/history';
import { Spin } from 'antd';
import './App.css';


@inject("store") @observer
class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: props.store.loggedIn
        }
    }

    componentWillMount() {
            
    }

    componentDidMount() {

    }

    render() {
        return (
            <Provider {...this.props}>
                <BrowserRouter>
                    <Route path="/" render={() => (
                        <Suspense fallback={< Spin tip="Loading..." > </Spin>}>
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <Route path="/" component={Index} />
                                <Route component={NotFound} />
                            </Switch>
                        </Suspense>
                    )
                    } />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;