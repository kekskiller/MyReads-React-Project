import dummy from '../icons/kirby-dummy.png';

export const Book = ({book, handleUpdate}) => {
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
            height: 150,
            width: 100,
            background: `url(${url}) no-repeat`,
            backgroundSize: 'contain' 
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={handleChange} defaultValue=''>
            <option value="" disabled>Move to...</option>     
            <option value="currentlyReading">Currently Reading</option>                      
            <option value="wantToRead">Want to Read</option>                            
            <option value="read">Read</option>
            <option value="none">Delete</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

 