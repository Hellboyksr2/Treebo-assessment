/**
 * Reducer to Handle the Hotel Details of Selected Hotel.
 */
export const Types = {
  SET_HOTEL_DETAILS : "SET_HOTEL_DETAILS"
}
  
export default function reducer(state={}, action) {
    var returnValue = state;
    switch (action.type) {
      case Types.SET_HOTEL_DETAILS: {
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