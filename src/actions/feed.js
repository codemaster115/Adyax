import { feedService } from '../services/feed';
import { NavigationActions } from 'react-navigation';
import * as actions from '../constants/actions/feed';

function handleResponse(type, payload) {
    console.log({ type, payload })
    return { type, payload };
}

function handleError(type, error) {
    console.log({ type, error })
    return { type, error };
}

export function getNewsFeed() {
    return dispatch => {
        dispatch(handleResponse(actions.GET_NEWS_FEED_REQUEST));

        feedService.getNewsFeed()
            .then(
                feeds => {
                    dispatch(handleResponse(actions.GET_NEWS_FEED_SUCCESS, feeds));
                },
                error => {
                    dispatch(handleError(actions.GET_NEWS_FEED_FAILURE, error));
                }
            );
    }
};