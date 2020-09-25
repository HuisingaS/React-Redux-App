import {
    FETCH_STATS,
    FETCH_STATS_ERROR,
    FETCH_STATS_SUCCESS
} from "../actions";

const initialState = {
    stats: [],
    loadingStats: true,
    errorMessage: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATS:
            return {
                ...state,
                loadingStats: true
            };
        case FETCH_STATS_ERROR:
            return {
                ...state,
                loadingStats: false,
                errorMessage: action.payload.message
            };
        case FETCH_STATS_SUCCESS:
            return {
                ...state,
                stats: action.payload,
                loadingStats: false
            };
        default:
            return state;
    };
};