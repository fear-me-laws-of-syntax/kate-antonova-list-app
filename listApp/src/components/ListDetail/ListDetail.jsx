import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListDetail.scss';
import axios from 'axios';

const ListDetail = () => {
    const { id } = useParams();
    const [listOfItems, setListOfItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/lists/${id}/items`);
            setListOfItems(data);
        }

        fetchItems()
    }, [])

    const toggleItemCheck = async (index) => {
        await axios.put(`${import.meta.env.VITE_API_URL}/lists/${id}/items/${index}`, { completed: !listOfItems.items.find((item) => item.item_id === index).completed });
        setListOfItems((prevItems) =>
        ({
            ...prevItems, items: prevItems.items.map((item) =>
                item.item_id === index ? { ...item, completed: !item.completed } : item
            )
        })
        );
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
            }
            catch {
                console.error("The item wasn't removed")
            }
        }
    };

    return (
        <div className="list-detail">
            <h2 className="list-detail__title">{listOfItems.title}</h2>
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
                        {/* Bin Icon for Deleting the Item */}
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
