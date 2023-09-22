import './Styles/BookList.css';
import React from 'react';
import AddNew from './AddNewBook';

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
                  <div className="book" key={book.id}>
                    <h3 className="category">{book.category}</h3>
                    <h2 className="booktitl">{book.booktitl}</h2>
                    <h3 className="author">{book.author}</h3>
                    <button type="button" className="btn">Remove</button>
                  </div>
                ))
            }

      </div>
      <AddNew />
    </>
  );
};

export default BookList;
