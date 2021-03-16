import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Course from '../pages/Course'
import Checkout from '../pages/Checkout'
import Teaching from '../pages/Teaching'
import Navbar from '../component/Navbar'
import Home from '../pages/Home'


function Routes() {

    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/course" component={Course}></Route>
                    <Route path="/checkout" component={Checkout}></Route>
                    <Route path="/teaching" component={Teaching}></Route>
                </Switch>
            </Router>  
        </div>
    )
}

export default Routes
