import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<BookList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
