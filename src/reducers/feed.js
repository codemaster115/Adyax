import * as actions from '../constants/actions/feed';

const initialState = {
    feed: null,
    isFetching: false,
    error: null
};

export default function feed(state = initialState, action) {
    switch (action.type) {
        case actions.GET_NEWS_FEED_REQUEST:
            return {
                ...state,
                isFetching: true,
                feed: null,
                error: null
            };
        case actions.GET_NEWS_FEED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                feed: action.payload,
                error: null
            };
        case actions.GET_NEWS_FEED_FAILURE:
            return {
                ...state,
                isFetching: false,
                feed: null,
                error: action.error
            };
        default:
            return state;
    }
}