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

const add = value => axios({
  method: 'POST',
  url: `${SERVICE_URL}/v1/postIts`,
  data: { value },
})
  .then(validateStatus(201))
  .then(response => response.data.id);

const remove = id => axios.delete(`${SERVICE_URL}/v1/postIts/${id}`)
  .then(validateStatus(204));

const todo = {
  getAll, add, remove,
};

export default todo;
export { getAll, add, remove };
