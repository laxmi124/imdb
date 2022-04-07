export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const NOT_ADDED_YET = "NOT_ADDED_YET";

export const updateWatchList = (payload) =>{
    return {
        type: ADD_TO_WATCHLIST,
        payload,
    }
}
export const notAddedYet = (payload) =>{
    return {
        type: NOT_ADDED_YET,
        payload,
    }
}