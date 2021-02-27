import styles from '../styles/components/Item.module.css'
import React from "react";
import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <div className={styles.Item}>
      <img src={props.img} alt="item"/>
    </div>
  );
};

Item.propTypes = {
  img: PropTypes.string,
};

export default Item;
