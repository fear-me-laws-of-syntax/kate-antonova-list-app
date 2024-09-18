import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListDetail.scss';

const ListDetail = () => {
    const { id } = useParams(); // List ID from the URL
    const [items, setItems] = useState([
        { name: 'Sunscreen', checked: true },
        { name: 'Beach Towel', checked: false },
        { name: 'Water Bottle', checked: true },
        { name: 'SPF Cream', checked: false },
        { name: 'Granola Bar', checked: false },
    ]); // Example list items

    const toggleItemCheck = (index) => {
        setItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const deleteItem = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this list item?');
        if (confirmDelete) {
            setItems((prevItems) => prevItems.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="list-detail">
            <h2 className="list-detail__title">{id.replace('-', ' ')}</h2>
            <ul className="list-detail__items">
                {items.map((item, index) => (
                    <li key={index} className={`list-detail__item ${item.checked ? 'list-detail__item--checked' : ''}`}>
                        <label className="list-detail__label">
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => toggleItemCheck(index)}
                                className="list-detail__checkbox"
                            />
                            {item.name}
                        </label>
                        {/* Bin Icon for Deleting the Item */}
                        <span
                            className="list-detail__delete-icon"
                            onClick={() => deleteItem(index)}
                            role="button"
                            aria-label="Delete item"
                        >
                            🗑️
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDetail;
