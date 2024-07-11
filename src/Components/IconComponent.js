import React from "react";

const IconComponent = ({ Icon, highlight, onMouseEnter }) => (
  <React.Fragment>
    <div
      className={`icon ${highlight ? "highlightIcon" : ""}`}
      onMouseEnter={onMouseEnter}
    >
      <Icon />
    </div>
  </React.Fragment>
);

export default IconComponent;
