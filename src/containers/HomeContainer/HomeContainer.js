import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHotelPrices } from '../../actions/HotelPricesActions';

import Home from '../../components/Home/Home';

/**
 * Container/Smart Componet which handles the State of Home Component.
 */
class HomeContainer extends Component {

    /**
     * On Component Mount Fetch the Hotel Prices.
     */
    componentDidMount() {
        this.props.fetchHotelPrices();
    }

    render() {
        return (
            <Home hotels={this.props.hotels} hotelPrices={this.props.hotelPrices}/>
        );
    }
}

/**
 *  State to Props Mapper
 */
const mapStateToProps =  state => ({
     hotels: state.hotels,
     hotelPrices : state.hotelPrices
});

/**
 *  Dispatch to Props Mapper
 */
const mapDispatchToProps = (dispatch) => {  
    return {
        fetchHotelPrices : () => {
            dispatch(fetchHotelPrices());
        }
    }
}

/**
 * Connect the Contaier to the Store.
 */
export default connect(
    mapStateToProps, mapDispatchToProps
  )(HomeContainer);