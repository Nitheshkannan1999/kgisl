import React from "react";

const IconComponent = ({ Icon, highlight, onMouseEnter }) => (
  <div
    className={`icon ${highlight ? "highlightIcon" : ""}`}
    onMouseEnter={onMouseEnter}
  >
    <Icon />
  </div>
);

export default IconComponent;
