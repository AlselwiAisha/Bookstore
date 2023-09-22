import './Styles/AddNewBook.css';
import React from 'react';

const AddNew = () => (
  <div className="add-new">
    <h2>ADD NEW BOOK</h2>
    <form className="add-form">
      <input type="text" className="booktitle" name="booktitle" placeholder="Book itle" />
      <input type="text" className="bookauthor" name="bookauthor" placeholder="Author" />
      <input type="text" className="bookcategory" name="bookcategory" placeholder="Category" />
      <button type="submit" className="add-btn"> Add book </button>
    </form>
  </div>
);

export default AddNew;
