import React  from 'react';
import './style.css'
import CatCard from "./CatCard";
import { SpinnerCircular } from 'spinners-react';

const CatsList = ({list, setFavoriteCats, favoriteCats, loader}) => {

    return (
        <div className="main__page _container">
            {(loader === true) ? <SpinnerCircular style={{color: "#4671D5", justifySelf: "center"}}/>  :
                <div className="cats__list">
                    {list.map(item => {
                        return <CatCard key={item.id} cat={item} setFavoriteCats={setFavoriteCats}
                                        favoriteCats={favoriteCats}/>
                    })}
                </div>}
                <p className="load_more_cats _container">... загружаем еще котиков ...</p>
        </div>
    );
};

export default CatsList;