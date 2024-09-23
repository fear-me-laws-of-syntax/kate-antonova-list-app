import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import MyLists from './components/MyLists/MyLists';
import ListDetail from './components/ListDetail/ListDetail';
import Suggestions from './components/Suggestions/Suggestions';
import CategoryLists from './components/CategoryLists/CategoryLists';
import CategoryListDetail from './components/CategoryListDetail/CategoryListDetail';

import './App.scss';


function App() {
  return (
    <Router>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* My Lists */}
        <Route path="/" element={<MyLists />} />
        <Route path="/list/:id" element={<ListDetail />} />

        {/* List Suggestions*/}
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/category/:categoryId" element={<CategoryLists />} />
        <Route path="/category/:categoryId/:listId" element={<CategoryListDetail />} />
      </Routes>
    </Router>
  );
}

export default App;