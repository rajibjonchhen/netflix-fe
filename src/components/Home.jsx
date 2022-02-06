import React, {useState,useEffect} from "react";
import Section from "./Section";
import TvShows from "./TvShows";

const Home = ({searchQuery}) => {
    const defaultMovies = ['Harry Potter','Marvel','Horror','Lord of the Rings']
    
    const[ category, setCategory] = useState(defaultMovies)
    const[ showSearch, setShowSearch] = useState(false)
useEffect(()=>{
    if(searchQuery){
        setShowSearch(true)
    }
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

export default Home