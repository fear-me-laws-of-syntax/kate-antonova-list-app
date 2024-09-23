import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './MyLists.scss';
import { useEffect, useState } from 'react';

const MyLists = () => {
    const [lists, setLists] = useState([]); 
    const [newListTitle, setNewListTitle] = useState(''); 
    const [newItem, setNewItem] = useState({})
    const navigate = useNavigate(); 
    useEffect(() => {
        const fetchLists = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/lists`);

            setLists(data.filter((list => list.category_id === null)));
        }
        fetchLists()
    }, [])

    const handleInputChange = (e) => {
        setNewListTitle(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (newListTitle.trim() === '') return; 

        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/lists`, { title: newListTitle });
        setNewItem(data)
        setLists([...lists, newListTitle]);
        alert('Your new list has been successfully created!📋✍🏼');

        navigate(`/list/${data.list_id}`);

        setNewListTitle('');
    };

    const deleteListItem = async (e, indexToDelete) => {
        e.stopPropagation();
        const confirmDelete = window.confirm('Are you sure you want to delete this list?');
        if (confirmDelete) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/lists/${indexToDelete}`);
                setLists((prevLists) => prevLists.filter((list) => list.list_id !== indexToDelete));
            }
            catch {
                console.error("The list wasn't removed")
            }
        }
    };

    const handleItemClick = (index) => {
        navigate(`/list/${index}`);
    };

    return (
        <div className="my-lists">
            <h2 className="my-lists__header">My Lists</h2>

            <form onSubmit={handleFormSubmit} className="my-lists__form">
                <input
                    type="text"
                    value={newListTitle}
                    onChange={handleInputChange}
                    maxLength="100"
                    placeholder="Add a new list..."
                    className="my-lists__input"
                />
                <button type="submit" className="my-lists__submit-button"> + Add List</button>
            </form>
            <ul className="my-lists__list">
                {lists.map((list) => (
                    <li
                        key={list.list_id}
                        className="my-lists__item"
                        onClick={() => handleItemClick(list.list_id)}
                    >
                        <span className="my-lists__link">{list.title}</span>
                        <button
                            className="my-lists__delete-button"
                            onClick={(e) => deleteListItem(e, list.list_id)}
                        >
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyLists;
