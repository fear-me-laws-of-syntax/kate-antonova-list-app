// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './CategoryLists.scss';

// const CategoryLists = () => {
//     const { categoryId } = useParams();
//     const [lists, setLists] = useState([]);
//     const [categoryTitle, setCategoryTitle] = useState('');

//     useEffect(() => {
//         const fetchLists = async () => {
//             try {
//                 const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/lists?category_id=${categoryId}`);
//                 setLists(data);

//                 // Fetch category title
//                 const categoryResponse = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${categoryId}`);
//                 setCategoryTitle(categoryResponse.data.title);
//             } catch (error) {
//                 console.error('Error fetching lists:', error);
//             }
//         };

//         fetchLists();
//     }, [categoryId]);

//     return (
//         <div className="category-lists">
//             <h2 className="category-lists__title">Lists for {categoryTitle}</h2>
//             <ul className="category-lists__items">
//                 {lists.map((list) => (
//                     <li key={list.list_id} className="category-lists__item">
//                         {list.title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CategoryLists;


import { useParams } from 'react-router-dom';
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
                const { data: listsData } = await axios.get(`${import.meta.env.VITE_API_URL}/lists?category_id=${categoryId}`);
                setLists(listsData);

                const { data: categoryData } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/${categoryId}`);
                setCategoryTitle(categoryData.title);
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
                    <li key={list.list_id} className="category-lists__item">
                        {/* add IF to filter by categoty id*/}
                        {list.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryLists;
