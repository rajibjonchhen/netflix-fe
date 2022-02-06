import React from 'react'
import CardSearch from './CardSearch'
import { Link } from 'react-router-dom';

const DisplayMovies = ({movieList})=> {
   
        return (
        <>
            {
            movieList.map(movie => <Link to={'/MovieDetail/' + movie.imdbID}  key={movie.imdbID}><CardSearch movie={movie}></CardSearch></Link>)}
        </>);
    
}

export default DisplayMovies;