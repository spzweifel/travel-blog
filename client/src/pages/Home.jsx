import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
    // const { loading, data } = useQuery(QUERY_MATCHUPS, {
    //   fetchPolicy: "no-cache"
    // });
  
    // const matchupList = data?.matchups || [];
    return (
        <div className="home-page">
            <h1 className='welcome'>Welcome to the Suddenly Unplanned blog!</h1>
            <h2 className='main'>Come join me on my next adventure where things will inevitably go wrong in the most chaotic way possible!</h2>
       </div>
    );
}

export default Home;
