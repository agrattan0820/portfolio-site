"use client";

import { useBallAnimation } from "../utils/hooks/use-ball-animation";
import { useState } from "react";

function IntroOverlay() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useBallAnimation({
    enabled: true,
    onComplete: () => {
      setAnimationComplete(true);
      document.body.style.overflowY = "auto";
    },
  });

  if (animationComplete) {
    return null;
  }

  return (
    <div className="intro-overlay">
      <div className="ball"></div>
    </div>
  );
}

export default IntroOverlay;
