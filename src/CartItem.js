import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";;

const CartItem = (props) => {

    const {price, title, qty} = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src = {product.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}> Qty: {qty}</div>
          <div className="cart-item-actions">
            {/* {Button} */}
            <AiFillMinusCircle onClick={() => onDecreaseQuantity(product)} />
            <AiFillPlusCircle onClick={() => onIncreaseQuantity(product)} />
            <AiFillDelete onClick={() => onDeleteProduct(product.id)} />
          </div>
        </div>
      </div>
    );       
  }

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
