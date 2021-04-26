import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.openweathermap.org',
  params: {
    appid: '2c486a422a8abed95fca0bbd2c35fc80',
  },
});
