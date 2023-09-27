import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/* eslint no-param-reassign: ["error", { "props": false }] */

const apiLink = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';

const fetchBooks = createAsyncThunk('books/fetchUsers', async (thunkAPI) => {
  try {
    const response = await axios.get(apiLink);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  try {
    await axios.post(apiLink, book);
    return book;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (itemId, thunkAPI) => {
  try {
    await axios.delete(`${apiLink}/${itemId}`);
    return itemId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
const initialState = {
  books: [],
  isLoading: true,
  error: undefined,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;
        const booksList = Object.keys(data).map((item_id) => ({
          item_id,
          ...data[item_id][0],
        }));
        state.isLoading = false;
        state.books = booksList;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const book = action.payload;
        state.books.push(book);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const itemId = action.payload.item_id;
        state.books = state.books.filter((book) => book.item_id !== itemId);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export { fetchBooks, addBook, removeBook };
export default bookSlice.reducer;
