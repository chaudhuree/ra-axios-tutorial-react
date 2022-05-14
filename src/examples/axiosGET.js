import axios from 'axios';
import { useEffect } from 'react';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {

  const fetchData = async () => {
    const response = await axios(url)
    console.log(response);
    console.log(response.data);
  }
  useEffect(() => {

    console.log('axios get request');
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
