import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/slices/CartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item: any) => (
          <div key={item.productId}>
            <h3>{item.productName}</h3>
            <p>{item.price}</p>

            {/* ✅ Remove Button */}
            <button
              onClick={() =>
                dispatch(removeItem(item.productId))
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;