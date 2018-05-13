import axios from "axios";

import { Types } from '../reducers/HotelDetailsReducer';

/**
 * Action To Fetch the Hotel Details for the Selected Hotel
 * @param {*} id 
 */
export function fetchHotelDetails(id) {
    return (dispatch) => {
        return axios.get('http://www.mocky.io/v2/5a7f265b2e00005d00b56877')
        .then(function (response) {
            if(response && response.data && response.data.data) {
                dispatch(setHotalDetails(response.data.data))
            } else {
                dispatch(setHotalDetails({}))
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
}

/**
 * Action/Dispatch Object creator for Setting the Hotel Details to the Store.
 * @param {*} payload 
 */
function setHotalDetails(payload) {
    return {
        type : Types.SET_HOTEL_DETAILS,
        payload
    }
}