import { Link } from 'react-router-dom';
import './MyLists.scss';


const MyLists = () => {
    const lists = ['Hot Country', 'Snowboard Trip', 'Camping', 'Music Festival', 'Beach Trip']; // Example data

    return (
        <div>
            <h2>MY LISTS</h2>
            <ul>
                {lists.map((listName, index) => (
                    <li key={index}>
                        <Link to={`/list/${listName.toLowerCase().replace(' ', '-')}`}>{listName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyLists;