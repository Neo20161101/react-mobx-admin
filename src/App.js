import React, { Component } from 'react';
import { Provider ,observer,inject } from 'mobx-react'
import { HashRouter } from 'react-router-dom'
import { Router,Switch, Route } from 'react-router'
import './App.css';
import routers from './router/router';
import Menu from './Menu';
import NotFound from './NotFound/index';

@inject("store") @observer
class App extends Component {
    render() {
        const { store:{title} } = this.props;
        return (
            <Provider {...this.props}>
                <HashRouter>
                    <div>
                        <Menu />
                        {/*这是左侧导航栏*/}
                        <Switch>
                            {routers.map((route, i) => {
                                return <Route key={i} exact path={route.path} component={route.component}/>
                            })}
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>

        );
    }
}

export default App;
// history={history}