import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ShowCard from "./ShowCard";
import Advertising from "../../Components/Navbar/Advertising";

const ShowBrandDetails = () => {
  const categories = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <Advertising></Advertising>
      <div className="grid grid-cols-1 md:grid-cols-2 m-68">
      {
        categories.map(category => 
        <ShowCard key={category._id}
           category={category}
           ></ShowCard>)
      }
      </div>
    </div>
  );
};

export default ShowBrandDetails;
