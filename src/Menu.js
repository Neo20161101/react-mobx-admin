import React, {Component} from 'react';
import routers from './router/router';
import { Link } from 'react-router-dom'

class Menu extends Component{
    render(){
        return(
            <ul className='menu'>
                {routers.map(function (route, i) {
                    return <Link to={route.path} key={i}>
                        <li>{route.name}</li>
                    </Link>
                })}
            </ul>
        )
    }
}

export default Menu;