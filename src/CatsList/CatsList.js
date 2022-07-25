import React from 'react';
import './style.css'
import CatCard from "./CatCard";

const CatsList = ({list}) => {
    return (
        <div className="cats__list _container">
            {list.map(item => {
                return <CatCard key={item.id} cat={item} />
            })}
        </div>
    );
};

export default CatsList;