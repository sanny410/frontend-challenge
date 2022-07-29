import React, {useEffect, useState} from 'react';
import './style.css'

const CatCard = ({cat, setFavoriteCats, favoriteCats, isFavorite}) => {

    const [favoriteClass, setFavoriteClass] = useState(false)

    useEffect(() => {
        let isArray = favoriteCats.find(item => item.id === cat.id);
        if (isArray !== undefined) {
            setFavoriteClass(true)
        }
    }, [])


    const toggleClass = () => {
        setFavoriteClass(!favoriteClass);
    };

    const addFavoriteCat = (cat) => {
        let isArray = favoriteCats.find(item => item.id === cat.id)
        if (!isArray) {
            setFavoriteCats(favoriteCats => [...favoriteCats, cat])
        } else {
            setFavoriteCats([...favoriteCats.filter((item) => item.id !== cat.id)])
        }
    }

    return (
        <div className={favoriteClass ? `cat__card favorite ${isFavorite}` : `cat__card ${isFavorite}`}
             style={{backgroundImage: `url(${cat.url})`}} >
            <div className="heart__favorite" onClick={() => {
                toggleClass()
                addFavoriteCat(cat)
            }} />
        </div>
    );
};

export default CatCard;