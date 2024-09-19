import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


import './Suggestions.scss';

// import express from 'express';
// const router = express.Router();

const suggestionsData = [
    { title: 'Travel', color: 'soft-pink', imageSrc: 'src/assets/images/travel.jpg' },
    { title: 'Packing', color: 'soft-green', imageSrc: 'src/assets/images/packing.png' },
    { title: 'Cleaning', color: 'soft-blue', imageSrc: 'src/assets/images/cleaning.png' },
    { title: 'Wellness', color: 'soft-purple', imageSrc: 'src/assets/images/health.jpg' },
];


const Suggestions = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <div className="suggestions">
            <h2 className="suggestions__title">Inspiration</h2>
            <div className="suggestions__grid">
                {suggestionsData.map((suggestion, index) => (
                    <div
                        className={`suggestions__item suggestions__item--${suggestion.color}`}
                        key={index}
                        onClick={() => handleCategoryClick(suggestion.categoryId)}
                    >
                        <h3 className="suggestions__item-title">{suggestion.title}</h3>
                        <div className="suggestions__image-container">
                            <img src={suggestion.imageSrc} alt={suggestion.title} className="suggestions__image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Suggestions;