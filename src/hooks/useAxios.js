import { useState } from "react";
import { v1 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [state, setState] = useState([]);

  const fetchData = async (addToURL = "") => {
    console.log(url,addToURL)
    const res = await axios.get(`${url}${addToURL}`);

    setState((state) => [...state, { ...res.data, id: uuid() }]);
  };

  return [state, fetchData];
};

export default useAxios;
