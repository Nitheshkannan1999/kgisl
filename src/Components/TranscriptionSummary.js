import React from "react";
import ExpandedView from "./ExpandedView";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ClientEmotionAndTips from "./ClientEmotionAndTips";

const TranscriptionSummary = ({
  showExpandedView,
  toggleExpandedView,
  emojiArr,
}) => (
  <div className="call-summary">
    <div className="transcription-summary">
      <h2>Resume of transcription</h2>
      <p>
        The customer said his{" "}
        <span className="highlight">signal was lost this afternoon</span> and
        requested support through a technical visit. He confirmed that{" "}
        <span className="highlight">made all steps to reset the equipment</span>
        , but the problem kept happening. Was suggested to wait some couple
        hours to restore the signal into the area, but the customer was
        impatient.
      </p>
      <div className="transcription-detail">
        <button></button>
        <span>Click to shift to</span>
      </div>
      <div className="transcription-detail-cont">
        <div className="detail">
          <span>Transcription Detail</span>
          <span className="eyeIcon" onClick={toggleExpandedView}>
            {showExpandedView ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </span>
        </div>
        <div className="show" onClick={toggleExpandedView}>
          {showExpandedView ? "Click to Close" : "Click to Show"}
        </div>
      </div>
      {showExpandedView && <ExpandedView />}
    </div>
    {<ClientEmotionAndTips emojiArr={emojiArr} />}
  </div>
);

export default TranscriptionSummary;
