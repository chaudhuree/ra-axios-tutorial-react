import axios from 'axios';
import { useState } from 'react';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState(null);

  const fetchDadJoke = async () => {
    try {
      const response = await axios(url,{
        headers:{
          Accept: 'application/json'
        }
      })
      const {data}=response;
      setJoke(data.joke)

    } catch (error) {
      console.log(error.response);
    }
    }


  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
