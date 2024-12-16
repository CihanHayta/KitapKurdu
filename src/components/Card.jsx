

import { Link } from 'react-router-dom';

export const Cards = ({book}) => {

  return (
    <div className="card shadow p-2">
        <img src={book.image} alt="" className='rounded' />
        <div className='card-body'>
          <h4> {book.title} </h4>
          <h4> {book.author} </h4>
        </div>
        <Link className='btn btn-primary w-100' to={`/detay/${book.id}`}>
          Detay gör
        </Link>
    </div>
  );
}

export default Cards;