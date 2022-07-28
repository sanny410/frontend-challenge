import React from 'react';
import './style.css'
import CatCard from "./CatCard";

const FavoriteCats = ({favoriteCats, setFavoriteCats}) => {


    return (
        <div className="cats__list _container">
            {favoriteCats.map(item => {
                return <CatCard cat={item} key={item.id}
                                         favoriteCats={favoriteCats}
                                         setFavoriteCats={setFavoriteCats}
                                         isFavorite={'favorite-cat'}/>
            })}
        </div>
    );
};

export default FavoriteCats;