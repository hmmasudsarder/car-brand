import { useLoaderData } from "react-router-dom";

const ShowDetailsButton = () => {
  const details = useLoaderData();
  const { photo, name, price, rating, category: cat } = details;
  return (
    <div className="mx-auto flex">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Brand Name: {cat}</h2>
          <h2 className="card-title">Price:$ {price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <div className="flex item-center justify-between ">
            <div className="">
              <button className="btn  bg-accent">Update</button>
            </div>
            <div className="">
              <button className="btn btn-secondary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsButton;
