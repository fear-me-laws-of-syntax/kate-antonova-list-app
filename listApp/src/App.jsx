import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
// import Navbar from './components/Navbar/Navbar';
import MyLists from './components/MyLists/MyLists';
import ListDetail from './components/ListDetail/ListDetail';
import Suggestions from './components/Suggestions/Suggestions';
import CategoryLists from './components/CategoryLists/CategoryLists';
import SuggestedListDetail from './components/SuggestedListDetail/SuggestedListDetail';

import './App.scss';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}

        {/* My Lists Routes */}
        <Route path="/" element={<MyLists />} />
        <Route path="/list/:id" element={<ListDetail />} />

        {/* List Suggestions Routes */}
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/suggestions/:category" element={<CategoryLists />} />
        <Route path="/suggestions/:category/:listId" element={<SuggestedListDetail />} />
      </Routes>
    </Router>
  );
}

export default App;