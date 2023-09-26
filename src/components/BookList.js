import './Styles/BookList.css';
import React from 'react';
import { useSelector } from 'react-redux';
import AddNew from './AddNewBook';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state) => state);
  return (
    <>

      <div className="book-list">
        {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.booktitl}
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
