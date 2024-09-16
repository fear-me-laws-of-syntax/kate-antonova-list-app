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

    return (
        <div>
            <h2>{id.replace('-', ' ')}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={item.checked ? 'checked' : ''}>
                        {/* Apply the 'checked' class conditionally to <li> */}
                        <label>
                            <input
                                type="checkbox"
                                checked={item.checked}
                                onChange={() => toggleItemCheck(index)}
                            />
                            {item.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDetail;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ListDetail.scss';

// const ListDetail = () => {
//     const { id } = useParams();
//     const [items, setItems] = useState([
//         { name: 'Sunscreen', checked: true },
//         { name: 'Beach Towel', checked: true },
//         { name: 'Water Bottle', checked: true },
//         { name: 'SPF Cream', checked: false },
//         { name: 'Granola Bar', checked: false },
//     ]);

//     const toggleItemCheck = (index) => {
//         setItems((prevItems) =>
//             prevItems.map((item, i) =>
//                 i === index ? { ...item, checked: !item.checked } : item
//             )
//         );
//     };

//     const deleteItem = (index) => {
//         setItems((prevItems) => prevItems.filter((_, i) => i !== index));
//     };

//     return (
//         <div>
//             <h2>{id.replace('-', ' ')}</h2>
//             <ul style={styles.list}>
//                 {items.map((item, index) => (
//                     <li key={index} style={item.checked ? styles.checkedItem : styles.item}>
//                         <input
//                             type="checkbox"
//                             checked={item.checked}
//                             onChange={() => toggleItemCheck(index)}
//                             style={styles.checkbox}
//                         />
//                         {item.name}
//                         {/* Bin Icon for Deleting the Item */}
//                         <span
//                             style={styles.deleteIcon}
//                             onClick={() => deleteItem(index)}
//                             role="button"
//                             aria-label="Delete item"
//                         >
//                             🗑️ {/* Unicode character for bin icon */}
//                         </span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ListDetail;
