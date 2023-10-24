
import { Link } from "react-router-dom";

const ShowCard = ({ category}) => {
  const { _id, photo, name, price, rating, category: cat } = category;
  
//   console.log(category);
//   console.log(cat);
  return (
    <div className="">
    
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Brand Name: {cat}</h2>
          <h2 className="card-title">Price:$ {price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
         
          <div className="flex item-center justify-between ">
          <div className="">
            <Link to={`/updateProduct/${_id}`}>
            <button className="btn  bg-accent">Update</button>
            </Link>
          </div>
          <div className="">
            <Link to={`/showDetails/${_id}`}>
            <button className="btn btn-secondary">Details</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
