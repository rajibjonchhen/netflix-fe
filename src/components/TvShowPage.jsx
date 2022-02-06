import React, {useState,useEffect} from "react";
import Section from "./Section";
import TvShows from "./TvShows";

const TVShow = ({searchQuery}) => {
    const defaultMovies = ['TV SHOW','Drama','Series','TV Program']
    
    const[ category, setCategory] = useState(defaultMovies)
    const[ showSearch, setShowSearch] = useState(true)
useEffect(()=>{
   
},[])

const setGenre = (category) =>{
    setCategory(category)
}
    return(
        <>
       {!searchQuery && <TvShows setGenre={setGenre} category={category}/> }
        {searchQuery? ( <Section heading="Search Results" title={searchQuery} showSearch={showSearch} />) : (<>
                  <Section heading={category[0]} title={category[0]}/>
                  <Section heading={category[1]} title={category[1]}/>
                  <Section heading={category[2]} title={category[2]}/>
                  <Section heading={category[3]} title={category[3]}/>
                </>)}
        </>
    )
}

export default TVShow