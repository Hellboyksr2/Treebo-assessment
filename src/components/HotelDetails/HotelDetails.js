import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import RoomDetails from '../common/RoomDetails/RoomDetails';
import ChipsDetails from '../common/ChipsDetails/ChipsDetails';

/**
 * Hotel Details Component for Showing the Selected Hotal Details Page.
 */
class HotelDetails extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardTitle title={this.props.name} subtitle={this.props.address} actAsExpander={false}/>
                    <Divider/>
                    
                    { this.props.prices ? (<RoomDetails prices={this.props.prices} expandable={false}/>) : (null) }
                    <Divider/>
                    
                    <ChipsDetails title={"Policies"} chips={this.props.hotelDetails.policies}/>
                    <Divider/>
                    
                    <ChipsDetails title={"Essentials"} chips={this.props.hotelDetails.essentials}/>
                    <Divider/>
                </Card>
           </div>
        )
    }
}

export default HotelDetails;
