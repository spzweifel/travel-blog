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
            <h1 className='welcome'>Welcome to My Blog!</h1>
            <h2>Let's find our next adventure!</h2>
       </div>
    );
}

export default Home;
