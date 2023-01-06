import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserDataFromAPI = () => {
    return axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
};

const fetchUsersByIdAPI = (id: string) => {
    return axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/' + id);

};

export const fetchUserData = () => {
    return useQuery('users', fetchUserDataFromAPI);

};
export const fetchUsersById = (id: string) => {
    return useQuery(['users-id', id], () => fetchUsersByIdAPI(id));

};