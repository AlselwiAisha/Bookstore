import './Styles/BookList.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNew from './AddNewBook';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlise';

const BookList = () => {
  const { isLoading, error, books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div style={{ color: 'red' }}>There is an error...!</div>;
  }

  return (
    <>

      <div className="book-list">
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              item_id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        }
      </div>
      <AddNew />
    </>
  );
};

export default BookList;
