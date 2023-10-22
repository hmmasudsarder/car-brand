import Swal from "sweetalert2";
import Advertising from "../../Components/Navbar/Advertising";
import { Link } from "react-router-dom";

const ShowCard = ({ category }) => {
  const { _id, photo, name, price, rating, category: cat } = category;
  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Deleted!',
                    'Your Product has been deleted.',
                    'success'
                  )
            }
            
        })
        }
      })
  }
//   console.log(category);
//   console.log(cat);
  return (
    <div className="">
      <div className="w-4/4 mx-auto">
        <Advertising></Advertising>
      </div>
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
            <button onClick={()=> handleDelete(_id)} className="btn btn-secondary">Delete</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
