import { useLoaderData } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Swal from "sweetalert2";

const ProductUpdate = () => {
  const category = useLoaderData();
  const { _id, photo, description, name, price, rating, category: cat } = category;
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const updateProduct = { name, price, rating, category, description, photo };
    console.log(updateProduct);
    fetch(`https://brand-shop-server-75fl384hx-masuds-projects-c3df1a1c.vercel.app/cardUpdate/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Product Update SuccessFully",
            icon: "success",
            confirmButtonText: "updated",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
        <div className="bg-[#F4F3F0] p-24">
          <h3 className="text-3xl font-bold text-center mb-2">
            Update Brand Item
          </h3>
          <form onSubmit={handleUpdateProduct}>
            <div className="md:flex mb-8 gap-5 ">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Edit Name</span>
                </label>
                <label className="">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    required
                    placeholder="Add Your Brand Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Edit Price</span>
                </label>
                <label className="">
                  <input
                    type="text"
                    defaultValue={price}
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
                  <span className="label-text font-bold">Edit Rating</span>
                </label>
                <label className="">
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    required
                    placeholder="still rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Update Brand Name</span>
                </label>
                <label className="label">
                  <select
                    name="category"
                    className="input input-bordered w-full"
                    defaultValue={cat}
                  >
                    <option value=''></option>
                    <option value="volvo">VOLVO</option>
                    <option value="toyota">TOYOTA</option>
                    <option value="bmw">BMW</option>
                    <option value="audi">AUDI</option>
                    <option value="rangerover">Range Rover</option>
                    <option value="ferrari">FERRARI</option>
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
                  defaultValue={description}
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
                    defaultValue={photo}
                    required
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <input
              type="submit"
              value="Update Product"
              className="btn btn-block text-white btn-success"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdate;
