import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlise';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book" key={id}>
      <h3 className="category">{category}</h3>
      <h2 className="booktitl">{title}</h2>
      <h3 className="author">{author}</h3>
      <button type="button" className="btn" onClick={() => dispatch(removeBook({ id }))}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
