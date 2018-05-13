/**
 * Funcion to Map the Array of Objects to Object based on the Key and Value Field Names Provided
 * If the Key name is Empty then by default it will be treated as id
 * IF the Value field is Empty then entire object will be mapped to the value.
 * 
 * @param {*} array 
 * @param {*} keyField 
 * @param {*} valueField 
 * 
 * @returns Object
 */
export function creatMapFromArray(array , keyField = "id", valueField = null) {
    let map = {};

    if(array) {
        array.forEach(( value ) => {
            map[ value[keyField] ] = valueField ? value[valueField] : value;
        }) 
    }
    return map;
}

/**
 * Function to find the Minimum value from the list. 
 * 
 * @param {*} array
 * @returns Integer
 */
export function getMinValue(array) {
    let min = null;

    array.forEach((value) => {
        if(!min) {
            min = value;
        } else if( value && value < min) {
            min = value;
        }
    })

    return min;
}