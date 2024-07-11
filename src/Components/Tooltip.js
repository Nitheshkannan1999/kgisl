import React from "react";
import "./styles/Tooltip.scss";

function Tooltip({ text }) {
  return (
    <div className="tooltip">
      <div className="icon">
        <i className="call-icon">📞</i>
      </div>
      <span className="tooltip-text">{text}</span>
    </div>
  );
}

export default Tooltip;
