import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Cart() {
  const cartobj = useSelector((store) => store.CartReducer);
  const dispatch = useDispatch();
  // const tablebody = cartobj.cartitems.map((item) => {
  //   return (
  //     <tr>
  //       <td>{item.itemName}</td>
  //       <td>{item.itemPrice}</td>
  //       <button
  //         className="btn btn-danger"
  //         onClick={() => {
  //           dispatch({ type: "DELETE_ITEM_FROM_CART", payload: item });
  //         }}
  //       >
  //         DELETE
  //       </button>
  //     </tr>
  //   );
  // });
  const tablebody = cartobj.cartitems.map((item) => (
    <tr key={item.itemId}>
      <td>{item.itemName}</td>
      <td>{item.itemPrice}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: "DELETE_ITEM_FROM_CART", payload: item });
          }}
        >
          DELETE
        </button>
      </td>
    </tr>
  ));
  return (
    // <div className="row justify-content-center">
    //   <div className="table table-dark table-bordered col-md-8 mt-5">
    //     <thead>
    //       <th>ItemName</th>
    //       <th>ItemPrice</th>
    //       <th>Action</th>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>{item.itemName}</td>
    //         <td>{item.itemPrice}</td>
    //         <td>Action</td>
    //       </tr>
    //     </tbody>
    //   </div>
    //   <h1>This is Cart Component</h1>
    // </div>
    <div className="row justify-content-center">
    <div className="col-md-8 mt-5">
      <h1>This is Cart Component</h1>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>ItemName</th>
            <th>ItemPrice</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tablebody}
        </tbody>
      </table>
    </div>
  </div>
  );
}
export default Cart;
