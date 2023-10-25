import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const MyCart = () => {
  const myCartDetails = useLoaderData();
  console.log(myCartDetails);
  return (
    <div>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-3">
      {myCartDetails.map((details) => (
        <div className="" key={details._id}>
          <div className="w-[70vh]">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="" src={details.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {details.name}</h2>
                <h2 className="card-title">Brand Name: {details.cat}</h2>
                <h2 className="card-title">Price:$ {details.price}</h2>
                <h2 className="card-title">Rating: {details.rating}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyCart;
