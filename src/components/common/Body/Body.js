import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../../../containers/HomeContainer/HomeContainer';
import HotelDetailsContainer from '../../../containers/HotelDetailsContainer/HotelDetailsContainer';

const style = {
    minHeight : "calc(100% - 142px)",
    padding : "2% 20% 0%",
    background: "#f1f1f1"
};

/**
 * Body Component Which handles the Routs for the Different Pages.
 */
class Body extends Component {
    
    render() {
        return (
            <div style={style}>
                <Switch>
                    <Route exact path='/' component={ HomeContainer }/>
                    <Route exact path='/details/:id' component={ HotelDetailsContainer }/>
                </Switch>
            </div>
        )
    }
}

export default Body;