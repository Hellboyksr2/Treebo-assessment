import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHotelPrices } from '../../actions/HotelPricesActions';
import { fetchHotelDetails } from '../../actions/HotelDetailsActions';

import HotelDetails from '../../components/HotelDetails/HotelDetails';

/**
 * Container/Smart Componet which handles the State of Hotel Details Component.
 */
class HotelDetailsContainer extends Component {

    /**
     * On Component Mount Fetch the Prices and Hotal Details.
     */
    componentDidMount() {
        this.props.fetchHotelPrices();
        this.props.fetchHotelDetails(this.props.match.params.id);
    }
    
    render() {
        // eslint-disable-next-line
        const hotel = this.props.hotels.find( (hotel) => hotel.id == this.props.match.params.id);
        return (
            hotel ? <HotelDetails name={hotel.name}
            address={`${hotel.city} , ${hotel.locality}`}
            prices ={this.props.hotelPrices[hotel.id] ? this.props.hotelPrices[hotel.id] : null}
            hotelDetails = {this.props.hotelDetails}/> : null
        );
    }
}

/**
 *  State to Props Mapper
 */
const mapStateToProps =  state => ({
     hotels: state.hotels,
     hotelPrices : state.hotelPrices,
     hotelDetails : state.hotelDetails
});

/**
 *  Dispatch to Props Mapper
 */
const mapDispatchToProps = (dispatch) => {  
    return {
        fetchHotelPrices : () => {
            dispatch(fetchHotelPrices());
        },
        fetchHotelDetails : (id) => {
            dispatch(fetchHotelDetails(id))
        }
    }
}

/**
 * Connect the Contaier to the Store.
 */
export default connect(
    mapStateToProps, mapDispatchToProps
  )(HotelDetailsContainer);