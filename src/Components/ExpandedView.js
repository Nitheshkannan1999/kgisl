import React from "react";

const options = [
  { id: 1, text: "Technical Problem" },
  { id: 2, text: "Change your plan" },
  { id: 3, text: "Something else" },
];

const ExpandedView = () => {
  return (
    <div className="expandedView">
      <div className="leftCont">
        <div className="pointCont">
          Hi, I am good rob. Choose your option so we can help you.
        </div>
        <div className="pointCont">Option 1</div>
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
