import axios from 'axios';

const KEY = 'AIzaSyDMpIH2G2QuphpEqsB6ZQ4fQX_MrOugiD4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
