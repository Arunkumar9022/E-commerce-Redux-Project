import React, { useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
function Items() {
  const [searchkey, setSearchKey] = useState("");
  const itemsobj = useSelector((store) => store.ItemsReducer);
  const [itemslist, setItemList] = useState(itemsobj.items);
  console.log(itemslist);

  const itemdata =
    itemslist &&
    itemslist.map((item) => {
      return (
        <div className="col-md-4" key={item.id}>
          <Item item={item} />
        </div>
      );
    });

  function filteritems() {
    const duplicatelist = itemsobj.items;
    const filteredlist = duplicatelist.filter((item) =>
      item.itemName.toLowerCase().includes(searchkey.toLocaleLowerCase())
    );
    setItemList(filteredlist);
    console.log(searchkey);
  }
  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={searchkey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          onKeyUp={filteritems}
          className="form-control mb-3 mt-3"
          placeholder="Enter Search"
        />
      </div>
      <div className="row">{itemdata}</div>
    </div>
  );
}
export default Items;
