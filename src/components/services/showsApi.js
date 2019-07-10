import axios from 'axios';

export const getShows = () => {
  return axios
    .get('http://api.tvmaze.com/shows')
    .then(response => response.data);
};
