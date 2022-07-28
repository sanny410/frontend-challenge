import React from 'react';
import './style.css'
import CatCard from "./CatCard";

const CatsList = ({list, setFavoriteCats, favoriteCats}) => {
    return (
        <div className="main__page _container">
            <div className="cats__list">
                {list.map(item => {
                    return <CatCard key={item.id} cat={item} setFavoriteCats={setFavoriteCats} favoriteCats={favoriteCats}/>
                })}
            </div>
            <p className="load_more_cats _container">... загружаем еще котиков ...</p>
        </div>
    );
};

export default CatsList;