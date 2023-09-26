import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    Books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.Books.push(
        {
          id: uuidv4(),
          category: action.payload.category,
          title: action.payload.title,
          author: action.payload.author,
        },
      );
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.Books.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
