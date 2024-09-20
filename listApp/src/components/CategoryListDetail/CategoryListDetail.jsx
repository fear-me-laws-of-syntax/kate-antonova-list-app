import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryListDetail.scss';

const CategoryListDetail = () => {
    const { listId: id } = useParams();
    const [listOfItems, setListOfItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            if (id) {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/lists/${id}/items`);
                console.log(data)
                setListOfItems(data);
            }
        }

        fetchItems();
    }, [id]);
    const useListHandler = async () => {
        // console.log({ ...listOfItems, category_id: null })
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/lists`, { ...listOfItems, category_id: null });
        if (data) {
            await Promise.all(
                listOfItems?.items.map(async (item) => {
                    await axios.post(`${import.meta.env.VITE_API_URL}/lists/${data.list_id}/items`, {
                        item_name: item.item_name,
                    });
                })
            );

            navigate(`/list/${data.list_id}`)
        }

    }

    return (
        <div className="list-detail">
            <div className="list-detail__heading">
                <h2 className="list-detail__title">{listOfItems.title}</h2>
                <button type="submit" className="list-detail__submit-button" onClick={useListHandler}> Use List </button>
            </div>

            <ul className="list-detail__items">
                {listOfItems?.items && listOfItems?.items.length > 0 && (listOfItems?.items.map((item) => (
                    <li key={item.item_id} className={`list-detail__item ${item.completed ? 'list-detail__item--checked' : ''}`}>
                        {item.item_name}
                    </li>
                )))}
            </ul>
        </div>
    );
};
export default CategoryListDetail;
