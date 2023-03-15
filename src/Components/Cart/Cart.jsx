// import Card from "../UI/Card";
import CartItem from "./CartItem";
import Navbar from "../Layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const total = useSelector((state) => state.cart.totalAmount);

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const allCartItems = cartItems.map((item) => (
    <CartItem
      key={item.id}
      item={{
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        totalPrice: item.totalPrice,
        price: item.price,
        image: item.image,
      }}
    />
  ));
  return (
    <div className="">
      <Navbar />
      <div className="mx-10 lg:mx-20 py-5 flex flex-row justify-between items-center">
        <h2 className=" text-lg  lg:text-3xl font-semibold leading-9">
          My Cart [{cartQuantity}]
        </h2>
        <div>
          <div className=" font-bold text-lg lg:text-3xl flex space-x-2">
            <p>Total:</p>
            <span>${total?.toFixed(2)}</span>
          </div>
        </div>
      </div>
      {allCartItems.length === 0 ? (
        <h1 className="text-center text-2xl my-10 ">
          No Items Added to Cart Yet
        </h1>
      ) : (
        <div>
          <ul className="mx-10">{allCartItems}</ul>

          <div className="grid place-items-center">
            <button
              className=" w-1/4 py-2 bg-slate-900 text-white uppercase rounded-md border"
              onClick={clearCart}
            >
              clear cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
