import axios from "axios";

import { Types } from '../reducers/HotelsReducer'


/**
 * Action To Fetch the Available Hotels List
 */
export function fetchHotels() {
    return (dispatch) => {
        return axios.get('http://www.mocky.io/v2/5a7f23442e00005000b56873')
        .then(function (response) {
            if(response && response.data && response.data.data) {
                dispatch(setHotals(response.data.data))
            } else {
                dispatch(setHotals([]))
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
function setHotals(payload) {
    return {
        type : Types.SET_HOTELS_LIST,
        payload
    }
}