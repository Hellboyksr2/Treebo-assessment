import React, { Component } from 'react';
import { CardText, CardHeader } from 'material-ui/Card';

const ulStyles = {
    margin: "0",
    listStyle: "none",
    padding: "0px 20px"
}

const liStyles = {
    padding: "10px 0px",
    borderBottom: "1px solid #CCCCCC",
    textTransform: "capitalize"
}

/**
 * Reusable Component to show the Available rooms and there Respective prices.
 * 
 * Need to Provide Room Prices
 */
class RoomDetails extends Component {
    
    render() {
        return (
            <CardText expandable={this.props.expandable}>
                <CardHeader title="Room Details"/>
                <ul style={ulStyles}>
                    {
                        Object.entries(this.props.prices).map((entry) => {
                        const [key, value] = entry;
                        return (<li key={key} style={liStyles}>
                                <span className="bold-text">{ key }</span>
                                <span className="float-right">{ value ? `₹ ${value}` : 'NA' }</span>
                            </li>)
                        })
                    }
                </ul>
            </CardText>
        )
    }
}

export default RoomDetails;