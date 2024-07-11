import React from "react";
import {
  ThumbUpOutlined as ThumbUpOutlinedIcon,
  ThumbDownOutlined as ThumbDownOutlinedIcon,
} from "@mui/icons-material";

const ClientEmotion = ({ emojiArr }) => (
  <div className="client-emotion">
    <h3>Client's emotion</h3>
    <div className="emotion-bar">
      {emojiArr.map(({ color, emoji }, idx) => (
        <div key={idx} className="emotion" style={{ backgroundColor: color }}>
          {emoji}
        </div>
      ))}
    </div>
    <p>Augusto Coimbra</p>
  </div>
);

const GreaiTips = () => (
  <div className="tips">
    <h3>Tips from GreAI</h3>
    <p>
      Show confidence; Maybe telling him that you will resolve the issue soon
      would be good.
    </p>
    <div>
      <ThumbUpOutlinedIcon style={{ marginRight: "6px" }} />
      <ThumbDownOutlinedIcon />
    </div>
  </div>
);

const ClientEmotionAndTips = ({ emojiArr }) => (
  <div className="additional-info">
    <ClientEmotion emojiArr={emojiArr} />
    <GreaiTips />
  </div>
);

export default ClientEmotionAndTips;
