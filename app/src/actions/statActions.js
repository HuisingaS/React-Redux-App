import axios from "axios";
export const FETCH_STATS = "FETCH_STATS";
export const FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS";
export const FETCH_STATS_ERROR = "FETCH_STATS_ERROR";

export const fetchStats = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_STATS });
        axios
            .get("https://api.covid19api.com/summary")
            .then((response) => {
                console.log(response)
                dispatch({ type: FETCH_STATS_SUCCESS, payload: response.data.Countries });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_STATS_ERROR,
                    payload: { message: "The covid statistics can not be delivered at this time" }
                });
            });
    };
};