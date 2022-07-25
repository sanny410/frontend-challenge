import React from 'react';
import './style.css'

const CatCard = ({cat}) => {
    return (
        <div className="cat__card" style={{backgroundImage: `url(${cat.url})`}}>
        </div>
    );
};

export default CatCard;