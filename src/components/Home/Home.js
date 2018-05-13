import React, { Component } from 'react';

import HotelCard from './HotelCard/HotelCard';

/**
 * Home Component for Showing the Available Hotals.
 */
class Home extends Component {

    render() {
        return (
            <React.Fragment>
                {   this.props.hotels.map( (hotel, index) => {
                        return (
                            <HotelCard key={index} name={hotel.name} address={`${hotel.city} , ${hotel.locality}`} code={hotel.id} 
                            prices ={this.props.hotelPrices[hotel.id] ? this.props.hotelPrices[hotel.id] : null} />
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default Home;