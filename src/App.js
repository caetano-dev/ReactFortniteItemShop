import "./App.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
const App = () => {
  const url = "https://fortniteapi.io/shop?lang=pt-BR";

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "317d3abf-1a3d48f7-97c5748f-16174ba3",
      },
    });
    const items = await response.json();
//important
    setItems(items.daily);
//important

    console.log(items);
  };
  useEffect(() => {
    getItems();
  }, []);

  // const items = [
  //   { id: 1, name: "egsdrf" },
  //   { id: 1, name: "edsadaf" },
  //   { id: 1, name: "hterteyrf" },
  //   { id: 1, name: "egerhthertherf" },
  // ];

  return (
    <div>
      {items.map((item) => {
        return (
          <>
            <Item className="item" name={item.description} />
          </>
        );
      })}
    </div>
  );
};

export default App;
