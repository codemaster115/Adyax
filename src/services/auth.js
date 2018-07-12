import axios from 'axios';

export const authService = {
    Signup,
};

function Signup(data) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log(data);

    return axios.post(' https://adyaxmobile.eu.auth0.com/dbconnections/signup', data, config).then(res => res.data);
}