import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ShowCard from "./ShowCard";
import { useState } from "react";
import Advertising from "../../Components/Navbar/Advertising";

const ShowBrandDetails = () => {
  const LoadedCategories = useLoaderData();
  const [categories, setCategories] = useState(LoadedCategories);
  // console.log(name);

  return (
    <div>
      <Navbar></Navbar>
      <Advertising></Advertising>
      <div className="grid grid-cols-1 md:grid-cols-2 m-68">
      {
        categories.map(category => 
        <ShowCard key={category._id}
           category={category} 
           categories={categories} 
           setCategories={setCategories} 
           ></ShowCard>)
      }
      </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{categories.name}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{categories.length}</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ShowBrandDetails;
