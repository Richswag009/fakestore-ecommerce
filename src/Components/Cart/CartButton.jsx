// import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
// import uiActions from "../../store/ui-slice";
import { HiShoppingBag } from "react-icons/hi";
const CartButton = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="">
      <HiShoppingBag className="text-3xl relative" />
      {cartQuantity === 0 ? (
        ""
      ) : (
        <span className="absolute top-3 text-xl px-1 text-white hover:scale-100 bg-slate-900  z-[100] rounded-3xl ">
          {cartQuantity}
        </span>
      )}
    </div>
  );
};

export default CartButton;
