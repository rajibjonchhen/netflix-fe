import React, { useState, useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import MyLayout from './components/MyLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieDetail from './components/MovieDetail';
import TvShowPage from './components/TvShowPage';
import MoviesPage from './components/MoviesPage'
import RecentlyAddedPage from './components/RecentlyAddedPage';
import MyList from './components/MyList';
import ErrorPage from './components/ErrorPage'

const App =()=> {

  const [searchQuery, setSearchQuery] = useState("")

const setSearch = (search) => {
setSearchQuery(search)
}
  
    return (
      <BrowserRouter>
      <div className="App" >
        
        <Routes>
        <Route path='/' element={<MyLayout setSearch={setSearch} searchQuery={searchQuery}>
            <Home searchQuery={searchQuery} />
        </MyLayout>}/>
       
          <Route path='/TvShow' element={<MyLayout setSearch={setSearch} searchQuery={searchQuery}>
            <TvShowPage/>
          </MyLayout>}/>

          <Route path='/MovieDetail/:MovieId' element={<MyLayout setSearch={setSearch} searchQuery={searchQuery}>
            <MovieDetail/>
          </MyLayout>}/>
        
         
        <Route path='/Movies' element={<MyLayout setSearch={setSearch} searchQuery={searchQuery}>
            <MoviesPage/>
          </MyLayout>}/>

          <Route path='/Recent' element={<MyLayout setSearch={setSearch} searchQuery={searchQuery}>
            <RecentlyAddedPage/>
          </MyLayout>}/>

          <Route path='/MyList' element={<MyLayout setSearch={setSearch} searchQuery={searchQuery}>
            <MyList/>
          </MyLayout>}/>

          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>   
      </div>
      </BrowserRouter>
    );

  
}

export default App;
