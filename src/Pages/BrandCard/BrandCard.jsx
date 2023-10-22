import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  const { image, category } = brand;
  return (
    <div>
      <Link to={`/showBrand/${category}`}>
      <div className="card w-80 bg-base-100 shadow-xl image-full">
        <figure>
          <img className="w-full h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BrandCard;
