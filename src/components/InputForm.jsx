/* eslint-disable react/prop-types */
import { useState } from "react";

const InputForm = ({ products, setProducts }) => {
  const [userInputs, setUserInputs] = useState({
    name: "",
    price: "",
    image: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      name: userInputs.name,
      price: userInputs.price,
      image: userInputs.image,
      quantity: userInputs.quantity,
    };
    setProducts([...products, newProduct]);
    setUserInputs({ name: "", price: "", image: "", quantity: "" });
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Add Products</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter name"
            value={userInputs.name}
            onChange={(e) =>
              setUserInputs({ ...userInputs, name: e.target.value })
            }
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="inputPrice"
            placeholder="Enter price"
            value={userInputs.price}
            onChange={(e) =>
              setUserInputs({ ...userInputs, price: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputImage" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="inputImage"
            placeholder="Enter image url"
            value={userInputs.image}
            onChange={(e) =>
              setUserInputs({ ...userInputs, image: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputQuantity" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            className="form-control"
            id="inputQuantity"
            placeholder="Enter quantity"
            value={userInputs.quantity}
            onChange={(e) =>
              setUserInputs({ ...userInputs, quantity: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default InputForm;
