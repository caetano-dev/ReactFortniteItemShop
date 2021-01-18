import React from "react";
import Item from "./Item.js";

function ItemContainer(props) {
  return (
    <div className="itemContainer">
      {props.item.map((item) => {
        return (
          <>
            <div key={item.id.toString()}>
              <Item className="item" img={item.full_background} />
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ItemContainer;
