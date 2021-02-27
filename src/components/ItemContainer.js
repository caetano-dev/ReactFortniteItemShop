import styles from '../styles/components/ItemContainer.module.css'
import React from "react";
import Item from "./Item"

function ItemContainer(props) {
  return (
    <div className={styles.ItemContainer}>
        <div>
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
    </div>
  );
}

export default ItemContainer;
