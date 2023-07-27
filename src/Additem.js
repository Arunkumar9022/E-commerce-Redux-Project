import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../src/App.css";

function Additem() {
  const [itemname, setItemName] = useState("");
  const [itemprice, setItemPrice] = useState("");
  const [itemimage, setItemImage] = useState("");
 
  const dispatch=useDispatch();

  const additem = () => {
    let item = {
      itemName: itemname,
      itemPrice: itemprice,
      itemImage: itemimage,
    };
    dispatch({type:'ADD_ITEM',payload:item})
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-5">
        <input
          type="text"
          value={itemname}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          className="form-control"
          placeholder="item-Name"
        />
        <input
          type="text"
          value={itemprice}
          onChange={(e) => {
            setItemPrice(e.target.value);
          }}
          className="form-control mt-2"
          placeholder="item-Price"
        />
        <input
          type="text"
          value={itemimage}
          onChange={(e) => {
            setItemImage(e.target.value);
          }}
          className="form-control mt-2"
          placeholder="item-Image"
        />
        <button onClick={additem} className="btn btn-success">
          ADD ITEM
        </button>
      </div>
    </div>
  );
}
export default Additem;
