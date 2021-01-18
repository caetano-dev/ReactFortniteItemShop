import "./App.css";
import React, { useState, useEffect } from "react";
import Item from "./Item";
const App = () => {
  const url = "https://fortniteapi.io/shop?lang=en";

  const [dailyItems, setDailyItems] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [load, setLoad] = useState(true);

  const getItems = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: process.env.API_KEY,
      },
    });
    const items = await response.json();

    setDailyItems(items.daily);
    setFeaturedItems(items.featured);
    setLoad(false);
  };
  useEffect(() => {
    getItems();
  }, []);

  if (load) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="title">
          <h1>Daily Items</h1>
        </div>
        <div className="itemContainer">
          {dailyItems.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <Item className="item" img={item.full_background} />
                </div>
              </>
            );
          })}
        </div>
        <div className="title">
          <h1>Featured Items</h1>
        </div>
        <div className="itemContainer">
          {featuredItems.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <Item className="item" img={item.full_background} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
