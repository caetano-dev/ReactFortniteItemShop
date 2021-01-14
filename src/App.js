import "./App.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import {Api} from "./api";
const App = () => {
  const url = "https://fortniteapi.io/shop?lang=pt-BR";

  const [dailyItems, setDailyItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);

  const getItems = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: Api,
      },
    });
    const items = await response.json();

    setDailyItems(items.daily);
    setFeaturedItems(items.featured);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div>
        <div className="title">
          <h1>Itens diários</h1>
        </div>
        <div className="itemContainer">
          {dailyItems.map((item) => {
            return (
              <>
                <Item className="item" img={item.full_background} />
              </>
            );
          })}
        </div>
        <div className="title">
          <h1>Itens Especiais</h1>
        </div>
        <div className="itemContainer">
          {featuredItems.map((item) => {
            return (
              <>
                <Item className="item" img={item.full_background} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
