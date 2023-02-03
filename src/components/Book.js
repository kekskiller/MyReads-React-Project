import dummy from '../icons/coverkitty.png';

export const Book = ({book, shelf, handleUpdate}) => {
  const url =  'imageLinks' in book ? book.imageLinks.thumbnail : dummy;

  const handleChange = (e) => {
    const newShelf = e.target.value;
    handleUpdate(book, newShelf);
  }

  return(
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            background: `url(${url}) no-repeat`,
            backgroundColor: '#333',
            backgroundSize: 'contain', 
            backgroundPosition: 'center' 
          }}
        ></div>

        <div className="book-shelf-changer">
          <select onChange={handleChange} defaultValue=''>
            <option value="" disabled>Move to...</option>     
            <option value="currentlyReading">Currently Reading {shelf === 'currentlyReading' && '✓'} </option>
            <option value="wantToRead">Want to Read {shelf === 'wantToRead' && '✓'} </option>
            <option value="read">Read {shelf === 'read' && '✓'}</option>
            <option value="none">None {shelf === 'none' && '✓'}
            </option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

 