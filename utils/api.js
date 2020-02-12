const axios = require('axios').default;
const api = (username) => {
  let url = `https://api.github.com/users/${username}`
  return axios.get(url)
    .then((response) => {
      return response.data
    });
}

module.exports = api;
