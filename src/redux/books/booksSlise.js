import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    await axios.delete(`${apiLink}/${itemId.item_id}`);
    return itemId.item_id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
const initialState = {
  books: [],
  isLoading: true,
  error: null,
};
let bookState = {};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        bookState = { ...state, isLoading: false };
        return bookState;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        bookState = { ...state, isLoading: false };
        const data = action.payload;
        const booksList = Object.keys(data).map((item_id) => ({
          item_id,
          ...data[item_id][0],
        }));
        bookState = { ...state, isLoading: false };
        bookState = { ...state, books: booksList };
        return bookState;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        bookState = { ...state, isLoading: false, error: action.payload };
        return bookState;
      })
      .addCase(addBook.pending, (state) => {
        bookState = { ...state, isLoading: true };
        return bookState;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        const book = action.payload;
        const newBook = state.books;
        bookState = { ...state, isLoading: false, books: [...newBook, book] };
        return bookState;
      })
      .addCase(addBook.rejected, (state, action) => {
        bookState = { ...state, isLoading: false, error: action.payload };
        return bookState;
      })
      .addCase(removeBook.pending, (state) => {
        bookState = { ...state, isLoading: true };
        return bookState;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const itemId = action.payload;
        const data = state.books.filter((book) => book.item_id !== itemId);
        bookState = {
          ...state,
          isLoading: false,
          books: data,
        };
        return bookState;
      })
      .addCase(removeBook.rejected, (state, action) => {
        bookState = { ...state, isLoading: false, error: action.payload };
        return bookState;
      });
  },
});

export { fetchBooks, addBook, removeBook };
export default bookSlice.reducer;
