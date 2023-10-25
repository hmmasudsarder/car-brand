import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";

const MyCart = () => {
  const myCartDetails = useLoaderData();
  console.log(myCartDetails);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              
              
            }
          });
      }
    });
  };
  return (
    <div>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-3">
      {myCartDetails.map((details) => (
        <div className="" key={details?._id}>
          <div className="w-[70vh]">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img className="" src={details?.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {details?.name}</h2>
                <h2 className="card-title">Brand Name: {details?.cat}</h2>
                <h2 className="card-title">Price:$ {details?.price}</h2>
                <h2 className="card-title">Rating: {details?.rating}</h2>
              </div>
              <div className="container flex justify-center mb-6  mx-auto">
              <div onClick={()=> handleDelete()}>
            <button className="btn btn-secondary ">Delete</button>
            </div>
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
