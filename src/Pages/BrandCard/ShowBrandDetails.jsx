import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ShowCard from "./ShowCard";

const ShowBrandDetails = () => {
  const categories = useLoaderData();
  // const { image, name, price, rating, category } = categories;
  // console.log(name);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 m-68">
      {
        categories.map(category => <ShowCard key={category._id} category={category} ></ShowCard>)
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
