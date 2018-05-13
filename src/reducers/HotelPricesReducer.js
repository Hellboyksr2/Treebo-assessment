/**
 * Reducer to Handle the Hotel Price Details.
 */
export const Types = {
  SET_HOTEL_PRICES_LIST : "SET_HOTEL_PRICES_LIST"
}
  
export default function reducer(state={}, action) {
    var returnValue = state;
    switch (action.type) {
      case Types.SET_HOTEL_PRICES_LIST: {
        returnValue = {...action.payload};
        break;
      }
      default : {
        returnValue = {...state};
        break;
      }
    }

    return returnValue;
}