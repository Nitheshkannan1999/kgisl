import React, { useState } from "react";
import "./styles/CallSummary.scss";
import {
  Home as HomeIcon,
  Call as CallIcon,
  PhonePaused as PhonePausedIcon,
  RecentActors as RecentActorsIcon,
} from "@mui/icons-material";
import IconComponent from "./IconComponent";
import TranscriptionSummary from "./TranscriptionSummary";

const CallSummary = () => {
  const [toolTipFlag, setToolTipFlag] = useState(false);
  const [showExpandedView, setExpandedView] = useState(false);

  const toggleExpandedView = () => {
    setExpandedView((prev) => !prev);
  };

  const iterateIconArr = [
    { Icon: HomeIcon },
    { Icon: CallIcon },
    {
      Icon: PhonePausedIcon,
      highlight: toolTipFlag,
      onMouseEnter: () => setToolTipFlag(true),
    },
    { Icon: RecentActorsIcon },
  ];

  const emojiArr = [
    { color: "red", emoji: "😠" },
    { color: "orange", emoji: "😐" },
    { color: "yellow", emoji: "😊" },
    { color: "green", emoji: "😊" },
    { color: "lightGreen", emoji: "😊" },
  ];

  return (
    <div>
      <div className="icons">
        {iterateIconArr?.map(({ Icon, highlight, onMouseEnter }, idx) => (
          <React.Fragment key={idx}>
            <IconComponent
              Icon={Icon}
              highlight={highlight}
              onMouseEnter={onMouseEnter}
            />
            {idx < 3 && <div className="crossLine"></div>}
          </React.Fragment>
        ))}
      </div>
      {toolTipFlag && (
        <TranscriptionSummary
          showExpandedView={showExpandedView}
          toggleExpandedView={toggleExpandedView}
          emojiArr={emojiArr}
        />
      )}
    </div>
  );
};

export default CallSummary;
