import axios from 'axios';

export default url =>
  axios
    .get(url)
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
