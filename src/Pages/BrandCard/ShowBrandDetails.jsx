import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ShowCard from "./ShowCard";
import Advertising from "../../Components/Navbar/Advertising";

const ShowBrandDetails = () => {
  const categories = useLoaderData();
  const category  = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Advertising></Advertising>
      <h1>
        {
        category.length === 0 && <img src="https://i.ibb.co/682bH8R/download-8.jpg" alt="" />
        }
        </h1>
      <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-x-14">
      {
        categories.map(category => 
        <ShowCard key={category._id}
           category={category}
           ></ShowCard>)
      }
      </div>
      </div>
    </div>
  );
};

export default ShowBrandDetails;
