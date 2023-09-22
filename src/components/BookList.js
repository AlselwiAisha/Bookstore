import './Styles/BookList.css';
import React from 'react';
import AddNew from './AddNewBook';
import Book from './Book';

const BookList = () => {
  const books = [
    {
      id: 1,
      booktitl: 'book1',
      author: 'author1',
      category: 'category1',
    },
    {
      id: 2,
      booktitl: 'book2',
      author: 'author2',
      category: 'category2',
    },
    {
      id: 3,
      booktitl: 'book3',
      author: 'author3',
      category: 'category3',
    },
  ];
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
