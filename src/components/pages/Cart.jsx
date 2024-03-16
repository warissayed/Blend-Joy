import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoStarSharp } from "react-icons/io5";
import { remove } from "../../Slice/cartSlice";
import images from "../../img/coffee.jpg";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  console.log(items);
  const removeCart = (itemsid) => {
    dispatch(remove(itemsid));
  };
  function NulCart() {
    if (items.length === 0) {
      return (
        <div>
          <h1 className="nav_title">Please Add Item to the Cart</h1>
          <img src={images} alt="" className="about_img" />
          <p className="card_details">
            {" "}
            it look like its empty please place your order
          </p>
        </div>
      );
    }
  }
  return (
    <div className="card_gallery">
      {items.map((items) => (
        <div className="card_content" key={items.id}>
          <img src={items.Image} alt="" className="card_img" />
          <h3 className="card_tittle">{items.Title}</h3>
          <p className="card_details">Lorem ipsum dolor sit amet</p>
          <h6 className="card_price">{items.price}</h6>
          <ul className="card_ul">
            <li
              className="card_li
        "
            >
              <IoStarSharp
                style={{
                  color: "gold",
                }}
                className="card_icon"
              />
            </li>
            <li
              className="card_li
        "
            >
              <IoStarSharp
                style={{
                  color: "gold",
                }}
                className="card_icon"
              />
            </li>
            <li
              className="card_li
        "
            >
              <IoStarSharp
                style={{
                  color: "gold",
                }}
                className="card_icon"
              />
            </li>
            <li
              className="card_li
        "
            >
              <IoStarSharp
                style={{
                  color: "gold",
                }}
                className="card_icon"
              />
            </li>
          </ul>
          <p className="card_details">{items.category}</p>
          <button onClick={() => removeCart(items.id)} className="card_button">
            remove
          </button>
        </div>
      ))}
      <NulCart />
    </div>
  );
};

export default Cart;
