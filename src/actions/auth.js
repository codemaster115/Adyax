import * as actions from '../constants/actions/auth';
import { authService } from '../services/auth';
import { NavigationActions } from 'react-navigation';

function handleResponse(type, payload) {
    console.log({ type, payload })
    return { type, payload };
}

function handleError(type, error) {
    console.log({ type, error })
    return { type, error };
}

export function Signup(data) {
    return dispatch => {
        dispatch(handleResponse(actions.SIGNUP_REQUEST));

        authService.Signup(data)
            .then(
                response => {
                    dispatch(handleResponse(actions.SIGNUP_SUCCESS, response));
                    alert('Signup sucess!')
                },
                error => {
                    dispatch(handleError(actions.SIGNUP_FAILURE, error));
                }
            );
    }
};