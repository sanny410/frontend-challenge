import React from 'react'
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import axios from 'axios'

import './App.css';
import Header from "../Header/Header";
import CatsList from "../CatsList/CatsList";
import FavoriteCats from "../CatsList/FavoriteCats";

function App() {
  const [catsList, setCatsList] = useState([]);

    const [favoriteCats, setFavoriteCats] = useState(() => {
        const cats = JSON.parse(sessionStorage.getItem("favoriteCats"));
        console.log(`Первый рендер. UseState ${cats}` )
        if (cats !== null) {
            return cats
        } else return []
    });

  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return function () {
          document.removeEventListener('scroll', scrollHandler)
      }
  }, [])


  useEffect(() => {
      if (fetching) {
          axios.get(`https://api.thecatapi.com/v1/images/search?format=json&limit=15&_page=${currentPage}`,
              {headers: {"x-api-key": "03b1c2d3-fb3d-4363-9e71-949a93d8d9f8"}})
              .then(res =>  {
                  setCatsList(catsList => [...catsList, ...res.data])
                  setCurrentPage(prevState => prevState + 1)
              })
              .finally(() => setFetching(false))
      }
  }, [fetching])


    const scrollHandler = (e) => {
      if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
      }
    }


    useEffect(() => {
        sessionStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
    },[favoriteCats])

  return (
    <div className="App">
      <Header />
        <Routes>
            <Route exact path='/' element={<CatsList list={catsList} setFavoriteCats={setFavoriteCats} favoriteCats={favoriteCats}/>} />
            <Route path={'/favorite'} element={<FavoriteCats favoriteCats={favoriteCats} setFavoriteCats={setFavoriteCats}/>} />
        </Routes>
    </div>
  );
}

export default App;
