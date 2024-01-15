import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import items from "../data";
import { CartContext } from "./CartContext";
import InputForm from "./InputForm";

const List = () => {
  const [products, setProducts] = useState(items);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Fine made Products</h2>
      <div className="row">
        {products.map((product) => {
          const { id, name, image, price, quantity } = product;
          return (
            <div className="col-12 col-md-4 " key={id}>
              <div className="card m-1">
                <img src={image} alt={name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">${price}</p>
                  <p className="card-text">{quantity}</p>
                </div>
              </div>
              <button
                className="btn btn-sm btn-danger ms-4"
                onClick={() => handleDelete(id)}
              >
                <FaTrashAlt />
              </button>
              <button
                className="btn btn-sm btn-primary ms-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <InputForm products={products} setProducts={setProducts} />
    </div>
  );
};
export default List;
