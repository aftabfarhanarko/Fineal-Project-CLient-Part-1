import axios from 'axios';
import React from 'react';
const axiosMiniman = axios.create({
  baseURL: "http://localhost:5000/",
});


const useAxios = () => {

    return axiosMiniman
};

export default useAxios;