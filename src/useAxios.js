import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (endpoint = '') => {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    setData(data => [...data, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
}

export default useAxios;
