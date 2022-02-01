import React, {useEffect} from 'react';
import axios from "axios";
import {API_HOST} from "./api_utils";

const Test = () => {
  useEffect(() => {
    const send = async () => {
      const response = await axios.get(`${API_HOST}pages/61f7e8423a5bd061c6bd4496/content`);
      debugger
      console.log(response)
      return "dd"
    }
    send()
  }, [])
  return (
    <div>
      ssss
    </div>
  );
};

export default Test;