import React from "react";

import 'components/DayListItem.scss';

import classNames from "classnames";

export default function DayListItem(props) {
  const dayClass = classNames("day-list_item", {
    "day-list_item--selected": props.selected === true,
    "day-list_item--full": props.spots === 0
  });
  
  function formatSpots(spotsOpen) {
    if (spotsOpen === 0) {
        return "no spots remaining";

    } else if (spotsOpen === 1) {
        return "1 spot remaining";
        
    } else {
        return `${spotsOpen} spots remaining`;
    }
  };
  
  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
  
}