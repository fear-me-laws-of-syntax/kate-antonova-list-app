import { Link, useNavigate } from 'react-router-dom';
import './MyLists.scss';
import { useState } from 'react';

const MyLists = () => {
    const [lists, setLists] = useState(['Beach trip', 'Snowboard Trip', 'Camping', 'Music Festival', 'Beach Trip']); // Example data
    const [newListName, setNewListName] = useState(''); // State to manage new list input
    const navigate = useNavigate(); // Hook to manage redirection

    // Function to handle input change
    const handleInputChange = (e) => {
        setNewListName(e.target.value);
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (newListName.trim() === '') return; // Prevent empty submissions

        // Add new list to lists state
        setLists([...lists, newListName]);

        // Redirect to the new list page
        navigate(`/list/${newListName.toLowerCase().replace(' ', '-')}`);

        // Clear input field after submission
        setNewListName('');
    };

    // Function to delete a list item with confirmation
    const deleteListItem = (indexToDelete) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this list?');
        if (confirmDelete) {
            setLists(lists.filter((_, index) => index !== indexToDelete));
        }
    };

    return (
        <div className="my-lists">
            <h1 className="my-lists__header">My Lists</h1>
            {/* Add New List Form */}
            <form onSubmit={handleFormSubmit} className="my-lists__form">
                <input
                    type="text"
                    value={newListName}
                    onChange={handleInputChange}
                    maxLength="50"
                    placeholder="Add a new list..."
                    className="my-lists__input"
                />
                <button type="submit" className="my-lists__submit-button"> + Add List</button>
            </form>
            <ul className="my-lists__list">
                {lists.map((listName, index) => (
                    <li key={index} className="my-lists__item">
                        <Link to={`/list/${listName.toLowerCase().replace(' ', '-')}`} className="my-lists__link">{listName}</Link>
                        <button className="my-lists__delete-button" onClick={() => deleteListItem(index)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyLists;
