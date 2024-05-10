import { Link } from "react-router-dom";

const ShowCard = ({ category }) => {
  // console.log(category)
  const { _id, photo, name, price, rating, category: cat } = category;

  //   console.log(category);
  //   console.log(cat);
  return (
    <div className="w-[70vh]">
      <div className="card card-compact bg-base-100 shadow-xl h-full mt-20 ">
        <figure>
          <img className="w-full h-auto" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Brand Name: {cat}</h2>
          <h2 className="card-title">Price:$ {price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>

          <div className="flex item-center justify-between flex-grow">
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
