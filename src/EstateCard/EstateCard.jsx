import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EstateCard = ({ estate }) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image, button_text } = estate;


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Estate"
          onError={(e) => { 
            e.target.onerror = null; 
            e.target.src = 'defaultImagePath.jpg'; 
        }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">{segment_name}</div>
        </h2>
        <p>
          {
            description.length > 100 ?
            <p>{description.slice(0, 100)} <Link className='text-blue-600' to={`/estate/${id}`}>Read More...</Link>
            </p> : 
            <p>{description}</p>
          }
          </p>
        <h2 className="text-2xl">{location}</h2>
        <p>{area}</p>
        <h5 className="text-xl">{facilities.join(', ')}</h5>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{price}</div>
          <div className="badge badge-outline">{status}</div>
        </div>
        <button className="btn"><Link to={`/estate/${id}`}>{button_text}</Link></button>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
    estate: PropTypes.object,
}

export default EstateCard;
