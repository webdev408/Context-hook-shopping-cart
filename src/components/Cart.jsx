import { useContext } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalQuantity = cart.reduce((total, item) => {
    return total + +item.quantity;
  }, 0);

  const increaseQty = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseQty = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Items in Cart</h2>
      <div className="row">
        {cart.map((product) => {
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
                onClick={() => increaseQty(id)}
                className="btn btn-sm btn-primary me-1"
              >
                <FaCirclePlus />
              </button>
              <button
                onClick={() => decreaseQty(id)}
                className="btn btn-sm btn-danger "
              >
                <FaCircleMinus />
              </button>
            </div>
          );
        })}
        <h3 className="d-flex justify-content-center align-items-center mt-3 fst-italic text-info">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
        <h3 className="d-flex justify-content-center align-items-center mt-3 fst-italic text-info">
          Total Quantity: {parseInt(totalQuantity)}
        </h3>
      </div>
    </div>
  );
};
export default Cart;
