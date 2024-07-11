import React, { useState } from "react";
import "./styles/CallSummary.scss";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ExpandedView from "./ExpandedView.js";

function CallSummary() {
  const [toolTipFlag, setToolTipFlag] = useState(false);
  const [showExpandedView, setExpandedView] = useState(false);

  const handleClick = () => {
    setExpandedView(!showExpandedView);
  };

  return (
    <>
      <div className="icons">
        <div className="icon">
          <HomeIcon />
        </div>
        <div className="crossLine1"></div>
        <div className="icon">
          <CallIcon />
        </div>
        <div className="crossLine2"></div>
        <div
          className={`icon ${toolTipFlag ? "highlightIcon" : ""} `}
          onMouseEnter={() => setToolTipFlag(true)}
        >
          <PhonePausedIcon />
        </div>
        <div className="crossLine3"></div>
        <div className="icon">
          <RecentActorsIcon />
        </div>
      </div>
      {toolTipFlag && (
        <div className="call-summary">
          <div className="transcription-summary">
            <h2>Resume of transcription</h2>
            <p>
              The customer said his{" "}
              <span className="highlight">signal was lost this afternoon</span>{" "}
              and requested support through a technical visit. He confirmed that{" "}
              <span className="highlight">
                made all steps to reset the equipment
              </span>
              , but the problem kept happening. Was suggested to wait some
              couple hours to restore the signal into the area, but the customer
              was impatient.
            </p>
            <div className="transcription-detail">
              <button></button>
              <span>Click to shift to</span>
            </div>
            <div className="transcription-detail-cont">
              <div className="detail">
                <span>Transcription Detail</span>
                <span className="eyeIcon" onClick={handleClick}>
                  {showExpandedView ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </span>
              </div>
              <div className="show" onClick={handleClick}>
                {showExpandedView ? "Click to Close" : "Click to Show"}
              </div>
            </div>
            {showExpandedView && <ExpandedView />}
          </div>
          <div className="additional-info">
            <div className="client-emotion">
              <h3>Client's emotion</h3>
              <div className="emotion-bar">
                <div className="emotion" style={{ backgroundColor: "red" }}>
                  😠
                </div>
                <div className="emotion" style={{ backgroundColor: "orange" }}>
                  😐
                </div>
                <div className="emotion" style={{ backgroundColor: "yellow" }}>
                  😊
                </div>
                <div className="emotion" style={{ backgroundColor: "green" }}>
                  😊
                </div>
                <div
                  className="emotion"
                  style={{ backgroundColor: "lightGreen" }}
                >
                  😊
                </div>
              </div>
              <p>Augusto Coimbra</p>
            </div>
            <div className="tips">
              <h3>Tips from GreAI</h3>
              <p>
                Show confidence; Maybe telling him that you will resolve the
                issue soon would be good.
              </p>
              <div>
                <ThumbUpOutlinedIcon style={{ marginRight: "6px" }} />
                <ThumbDownOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CallSummary;
