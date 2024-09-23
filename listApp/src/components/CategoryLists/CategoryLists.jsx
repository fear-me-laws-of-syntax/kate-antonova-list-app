
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './CategoryLists.scss';

const CategoryLists = () => {
    const { categoryId } = useParams();
    const [lists, setLists] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const { data: listsData } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${categoryId}/lists`);
                setLists(listsData);

                const { data: categoryData } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${categoryId}`);
                { console.log(categoryData) }
                setCategoryTitle(categoryData.category_name);
                console.log(categoryData);

            } catch (error) {
                console.error('Error fetching lists or category:', error);
            }
        };

        fetchLists();
    }, [categoryId]);

    return (
        <div className="category-lists">
            <h2 className="category-lists__title">Lists for {categoryTitle}</h2>
            <ul className="category-lists__items">
                {lists.map((list) => (

                    <Link key={list.list_id} to={`/category/${categoryId}/${list.list_id}`} >
                        <li className="category-lists__item">
                            {list.title}
                        </li>
                    </Link>

                ))}
            </ul>
        </div>
    );
};

export default CategoryLists;
