import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="sidenav">
                
                <Link to="/">Home</Link>
                <Link to="/Username">User Name</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/Trades">Trades</Link>
                <Link to="/Buy">Buy</Link>
                <Link to="/Sell">Sell</Link>
                <Link to="/Lookup">Lookup</Link>                 
                          
                
                
    
            </div>
        )
    }
}

export default Nav