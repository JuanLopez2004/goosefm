import React from "react";

const Background: React.FC = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(56, 55, 55, 1)",
      zIndex: 0,
      pointerEvents: "none",
    }}
  />
);

export default Background;