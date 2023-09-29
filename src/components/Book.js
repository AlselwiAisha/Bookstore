import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlise';
import Zeplin from './zeplin';

const Book = ({
  item_id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-bord">
      <div className="book" key={item_id}>
        <h3 className="category">{category}</h3>
        <h2 className="booktitl">{title}</h2>
        <h3 className="author">{author}</h3>
        <div className="btn-grop">
          <button type="button" className="btn">Comments</button>
          <div className="Line2" />
          <button type="button" className="btn" onClick={() => dispatch(removeBook({ item_id }))}>Remove</button>
          <div className="Line2" />
          <button type="button" className="btn">Edit</button>
        </div>
      </div>
      <Zeplin />
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
