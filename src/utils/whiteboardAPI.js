import axios from 'axios';

import { SERVICE_URL } from './constants';

const validateStatus = status => (response) => {
  if (response.status !== status) {
    throw new Error('Service returned a non OK status code');
  }
  return response;
};

const getAll = () => axios.get(`${SERVICE_URL}/v1/postIts`)
  .then(validateStatus(200))
  .then(response => response.data);

const add = (title, infoList, authorName, color) => axios({
  method: 'POST',
  url: `${SERVICE_URL}/v1/postIts`,
  data: { title, infoList, authorName, color },
})
  .then(validateStatus(201))
  .then(response => response.data.id);

const update = (id, title, infoList, authorName, color) => axios({
  method: 'PUT',
  url: `${SERVICE_URL}/v1/postIts/${id}`,
  data: { title, infoList, authorName, color },
})
  .then(validateStatus(204));

const remove = id => axios.delete(`${SERVICE_URL}/v1/postIts/${id}`)
  .then(validateStatus(204));

const whiteboard = {
  getAll, add, remove, update,
};

export default whiteboard;
