import * as actions from '../constants/actions/auth';

const initialState = {
    user: null,
    isFetching: false,
    error: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case actions.SIGNUP_REQUEST:
            return {
                ...state,
                isFetching: true,
                user: null,
                error: null
            };
        case actions.SIGNUP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload,
                error: null
            };
        case actions.SIGNUP_FAILURE:
            return {
                ...state,
                isFetching: false,
                user: null,
                error: action.error
            };
        default:
            return state;
    }
}