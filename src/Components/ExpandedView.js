import React from "react";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const options = [
  { id: 1, text: "Technical Problem" },
  { id: 2, text: "Change your plan" },
  { id: 3, text: "Something else" },
];

const leftContItems = [
  {
    id: 1,
    icon: <ConnectWithoutContactIcon />,
    text: "Hi, I am good rob. Choose your option so we can help you.",
  },
  {
    id: 2,
    icon: <ConnectWithoutContactIcon />,
    text: "Option 1",
  },
];

const ExpandedView = () => {
  return (
    <div className="expandedView">
      <div className="leftCont">
        {leftContItems.map((item) => (
          <div key={item.id} className="iconAndPoint">
            <span className="contactIcon">{item.icon}</span>
            <div className="pointCont">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="rightCont">
        {options.map((option) => (
          <div key={option.id} className="highlightText">
            {option.id}. {option.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandedView;
