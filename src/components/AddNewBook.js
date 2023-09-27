import './Styles/AddNewBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlise';

const AddNew = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState();
  const data = {
    item_id: uuidv4(),
    title,
    author,
    category,
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(addBook(data));
      setAuthor('');
      setCategory('');
      setTitle('');
    } else {
      alert('Fill all fields, please!');
    }
  };
  return (
    <div className="add-new">
      <h2>ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          type="text"
          className="booktitle"
          name="booktitle"
          placeholder="Book itle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="bookauthor"
          name="bookauthor"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          className="bookcategory"
          name="bookcategory"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="add-btn"
          onClick={submitHandler}
        >
          {' '}
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddNew;
