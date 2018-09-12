import React from 'react';
import './style.scss';

const ListItem = (props) => (
  <div className="list-item-wrapper">
    <li className="list-item">{props.item}</li>
  </div>
);

export default ListItem;
