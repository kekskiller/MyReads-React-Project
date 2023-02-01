import dummy from '../icons/kirby-dummy.png'

export const Book = ({book}) => {
    const url =  'imageLinks' in book ? book.imageLinks.thumbnail : dummy
    
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
                          <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading"> Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
    )
}

 