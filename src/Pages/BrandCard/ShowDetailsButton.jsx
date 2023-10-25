import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ShowDetailsButton = () => {
  const details = useLoaderData();
  delete details['_id']
  const { photo, name, price, rating, description } = details;
  const {user} = useContext(AuthContext);
 const handleAddToCart = () => {
  fetch('http://localhost:5000/addToCart', {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
      body: JSON.stringify({...details, userEmail: user.email})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
 }
  return (
    <div className="">
        <Navbar></Navbar>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-screen items-center flex">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="">Description: {description}</h2>
          <h2 className="card-title">Price:$ {price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <div className="flex item-center justify-between ">
            <Link to='/' onClick={() => handleAddToCart()} className="mx-auto">
              <button className="btn btn-outline btn-accent">Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsButton;
