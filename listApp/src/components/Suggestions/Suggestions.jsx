import { useNavigate } from 'react-router-dom';
import './Suggestions.scss';

const suggestionsData = [
    { title: 'Travel', color: 'soft-pink', categoryId: 1, imageSrc: 'src/assets/images/travel.jpg' },
    { title: 'Packing', color: 'soft-green', categoryId: 2, imageSrc: 'src/assets/images/packing.png' },
    { title: 'Cleaning', color: 'soft-blue', categoryId: 3, imageSrc: 'src/assets/images/cleaning.png' },
    { title: 'Wellness', color: 'soft-purple', categoryId: 4, imageSrc: 'src/assets/images/health.jpg' },
];

const Suggestions = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <div className="suggestions">
            <h2 className="suggestions__title">Get Inspired</h2>
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