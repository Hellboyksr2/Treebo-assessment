import axios from "axios";
import { creatMapFromArray } from '../common/Utils';

import { Types } from '../reducers/HotelPricesReducer';

/**
 * Action To Fetch the Hotel Prices
 */
export function fetchHotelPrices() {
    return (dispatch) => {
        return axios.get('http://www.mocky.io/v2/5a7f24f02e00005200b56875')
        .then(function (response) {
            if(response && response.data && response.data.data) {
                let data = creatMapFromArray(response.data.data, "id", "price");
                dispatch(setHotalPrices(data))
            } else {
                dispatch(setHotalPrices({}))
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
}

/**
 * Action/Dispatch Object creator for Setting the Hotel Price Details to the Store.
 * @param {*} payload 
 */
function setHotalPrices(payload) {
    return {
        type : Types.SET_HOTEL_PRICES_LIST,
        payload
    }
}