import React from "react";
import { string, number, func } from "prop-types";
import "./style.css";
export default function Tile({ color, id, onClick }) {
  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
}
Tile.defaultProps = {
  color: "gray",
};
Tile.propTypes = {
  color: string,
  id: number.isRequired,
  onClick: func.isRequired
};
