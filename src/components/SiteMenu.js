import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export class SiteMenu extends Component {
    render() {
        return (
            <Router>
                <div className='siteMenu'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </div>
                {/* <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch> */}
            </Router> 
        )
    }
}

export default SiteMenu