import axios from 'axios';

export const feedService = {
    getNewsFeed
};

function getNewsFeed() {
    return axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b297ad46dd814872a7a4feec8457ef16').then(res => res.data);
}