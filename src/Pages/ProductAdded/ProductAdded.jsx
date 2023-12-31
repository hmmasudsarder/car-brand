import Swal from "sweetalert2";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const ProductAdded = () => {
  const navigate = useNavigate();
  const handleProductAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const newProduct = { name, price, rating, category, description, photo };
    console.log(newProduct);
    fetch("https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/')
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Product Added SuccessFully",
            icon: "success",
            confirmButtonText: "New Add",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg-[#F4F3F0] p-24">
        <h3 className="text-3xl font-bold text-center mb-2">
          Add A Brand Item
        </h3>
        <form onSubmit={handleProductAdd}>
          <div className="md:flex mb-8 gap-5 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Add Name</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Add Your Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Add Price</span>
              </label>
              <label className="">
                <input
                  type="text"
                  required
                  name="price"
                  placeholder="Add Price Your Product"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8 gap-5 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="rating"
                  required
                  placeholder="still rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Add Brand Name</span>
              </label>
              <label className="label">
                <select name="category" className="input input-bordered w-full">
                  <option value=""></option>
                  <option value="volvo">VOLVO</option>
                  <option value="toyota">TOYOTA</option>
                  <option value="bmw">BMW</option>
                  <option value="audi">AUDI</option>
                  <option value="rangerover">Range Rover</option>
                  <option value="tata">TATA</option>
                </select>
              </label>
            </div>
          </div>
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-center">
                  Description
                </span>
              </label>

              <input
                type="text"
                name="description"
                required
                placeholder="Add description"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="mb-7">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <label className="">
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Product"
            className="btn btn-block btn-success"
          />
        </form>
      </div>
    </div>
  );
};

export default ProductAdded;
