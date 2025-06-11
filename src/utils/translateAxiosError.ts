import axios from 'axios';

const translateAxiosError = (e: unknown) => {
  if (axios.isAxiosError(e)) {
    console.log(e.response?.data);
    return e.response?.data;
  } else {
    return e;
  }
};

export default translateAxiosError;
