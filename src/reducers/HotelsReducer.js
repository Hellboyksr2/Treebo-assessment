/**
 * Reducer to Handle the Available Hotels list.
 */
export const Types = {
  SET_HOTELS_LIST : "SET_HOTELS_LIST"
}

export default function reducer(state=[], action) {
    var returnValue = state;
    switch (action.type) {
      case "SET_HOTELS_LIST": {
        returnValue = [...action.payload];
        break;
      }
      default : {
        returnValue = [...state];
        break;
      }
    }

    return returnValue;
}