import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, image, total, price, id } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemToCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        total,
        image,
      })
    );
  };

  return (
    <>
      <hr />
      <div className=" mx-auto lg:mx-20   justify-between items-center md:grid md:grid-cols-2 ">
        <img
          src={image}
          alt=" "
          className="  h-1/4 lg:h-5/6  w-[100px]  md:w-[150px]"
        />

        {/*  */}
        <div className=" my-5">
          <div className="">
            <p className="font-bold text-xl">{title.substring(0, 25)}</p>
            <span className=" mr-2 font-semibold">
              ${price.toFixed(2) * quantity}
            </span>
            (${price.toFixed(2)}/item)
          </div>
          <div className="text-2xl font-extrabold">
            x <span>{quantity}</span>
          </div>

          <div className="w-28 flex items-center my-10 justify-between px-4  space-x-5 py-1 text-white bg-slate-700  rounded-3xl">
            <button onClick={removeItemHandler} className="text-2xl">
              -
            </button>
            <span>{quantity}</span>
            <button onClick={addItemHandler} className="text-2xl">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
