import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ListDetail.scss';

const ListDetail = () => {
    const { id } = useParams();
    const [listOfItems, setListOfItems] = useState([]);
    const [newListTitle, setNewListTitle] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/lists/${id}/items`);
            setListOfItems(data);
        }

        fetchItems();
    }, [id]);

    const toggleItemCheck = async (index) => {
        await axios.put(`${import.meta.env.VITE_API_URL}/lists/${id}/items/${index}`, {
            completed: !listOfItems.items.find((item) => item.item_id === index).completed
        });
        setListOfItems((prevItems) => ({
            ...prevItems,
            items: prevItems.items.map((item) =>
                item.item_id === index ? { ...item, completed: !item.completed } : item
            )
        }));
    };

    const deleteItem = async (indexToDelete) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this list item?');
        if (confirmDelete) {
            try {
                await axios.delete(`${import.meta.env.VITE_API_URL}/lists/${id}/items/${indexToDelete}`);
                setListOfItems((prevItems) => ({
                    ...prevItems,
                    items: prevItems.items.filter((item) => item.item_id !== indexToDelete)
                }));
            } catch {
                console.error("The item wasn't removed");
            }
        }
    };

    // Handle form submission to add a new item
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (newListTitle.trim() === '') return;

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/lists/${id}/items`, {
                item_name: newListTitle,
            });
            setListOfItems((prevItems) => ({
                ...prevItems,
                items: [...prevItems.items, data]
            }));
            setNewListTitle('');
        } catch (error) {
            console.error("Failed to add item", error);
        }
    };

    // Handle input change for new list item
    const handleInputChange = (e) => {
        setNewListTitle(e.target.value);
    };

    return (
        <div className="list-detail">
            <h2 className="list-detail__title">{listOfItems.title}</h2>

            <form onSubmit={handleFormSubmit} className="list-detail__form">
                <input
                    type="text"
                    value={newListTitle}
                    onChange={handleInputChange}
                    maxLength="100"
                    placeholder="Add a new item…"
                    className="list-detail__input"
                />
                <button type="submit" className="list-detail__submit-button"> + Add Item</button>
            </form>

            <ul className="list-detail__items">
                {listOfItems?.items && listOfItems?.items.length > 0 && (listOfItems?.items.map((item) => (
                    <li key={item.item_id} className={`list-detail__item ${item.completed ? 'list-detail__item--checked' : ''}`}>
                        <label className="list-detail__label">
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => toggleItemCheck(item.item_id)}
                                className="list-detail__checkbox"
                            />
                            {item.item_name}
                        </label>
                        <span
                            className="list-detail__delete-icon"
                            onClick={() => deleteItem(item.item_id)}
                            role="button"
                            aria-label="Delete item"
                        >
                            🗑️
                        </span>
                    </li>
                )))}
            </ul>
        </div>
    );
};

export default ListDetail;
