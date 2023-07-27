import React from "react";
function Item({ item }) {
  return (
    <div class="shadow p-3 mb-5 bg-body rounded mt-3">
    <h1>{item.itemName}</h1>
    <img
      src={item.itemImage}
      className="img-fluid"
      alt="Shopping images appears here"
    />
    <h1>{item.itemPrice}</h1>
    <button className="btn btn-warning">Add to Cart</button>
  </div>
  );
}

export default Item;
