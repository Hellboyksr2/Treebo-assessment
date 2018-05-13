import { combineReducers } from "redux"

import hotels from "../reducers/HotelsReducer";
import hotelPrices from '../reducers/HotelPricesReducer';
import hotelDetails from '../reducers/HotelDetailsReducer';

/**
 * Combine Reducer Function which is used for creating the store.
 * 
 * All the Reducers should be added here so that they can be mapped to the store.
 */
export default combineReducers({
    hotels, hotelPrices, hotelDetails
});