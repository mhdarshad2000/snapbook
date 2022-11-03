import React from "react";
import { Link } from "react-router-dom";

export default function LeftLinks({ img, text, notification, link }) {
  return (
    <div className="left_link">
      <img src={`../../../left/${img}.png`} alt="" />
      {notification !== undefined ? (
        <div className="col">
          <Link to={link}>
            <div className="col_1">{text}</div>
            <div className="col_2">{notification}</div>
          </Link>
        </div>
      ) : (
        <span>{text} </span>
      )}
    </div>
  );
}
