import React, { Component } from 'react';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';

import RoomDetails from '../../common/RoomDetails/RoomDetails';

import { getMinValue } from '../../../common/Utils';

const CardActionsStyles = {
    textAlign: "right"
}

const priceStyles = {
    position: "absolute",
    right: "20px",
    top: "20px",
    color: "#4a4a4a",
    fontWeight: "bold",
    fontSize: "20px"
}

/**
 * Hotel Card Component for Showing the Hotal Details in list Page.
 */
class HotelCard extends Component {

    getPrice = () => {
        let lowestPrice = "NA"
        
        let prices = this.props.prices;
        
        if(prices) {
            const min = getMinValue(Object.values(this.props.prices));
            lowestPrice = min ? `₹ ${min}` : lowestPrice
        }

        return lowestPrice;
    }

    render() {
        return (
            <div>
                <Card>
                    <CardTitle title={this.props.name} subtitle={this.props.address} actAsExpander={true}>
                        <span style={priceStyles}>
                            {this.getPrice()}
                        </span>
                    </CardTitle> 
                    
                    {/* IF the Prices are available show the Prices Details as Expandable */}
                    { this.props.prices ? (<RoomDetails prices={this.props.prices} expandable={true}/>) : (null) }
                    
                    <CardActions style={CardActionsStyles}>
                        <Link to={`details/${this.props.code}`}><RaisedButton label="Show Details" primary={true}/></Link>
                    </CardActions>
                </Card>
                <Divider/>
            </div>
        )
    }
}

export default HotelCard;
