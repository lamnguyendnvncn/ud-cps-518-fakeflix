import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { TADUM_SOUND_URL } from "../../requests";
import "./playAnimation.scss";

const PlayAnimation = () => {
  let history = useHistory();
  const soundRef = useRef(null);
  const handleTadum = () => {
    soundRef.current.currentTime = 0;
    soundRef.current.play();
  };

  useEffect(() => {
    handleTadum();
    setTimeout(() => {
      history.push("/browse");
    }, 4200);
  }, [history]);

  return (
    <div className="PlayAnimation__wrp" data-testid="PlayAnimation__wrp">
      <audio ref={soundRef} src={TADUM_SOUND_URL} data-testid="audio" />
      <span className="PlayAnimation__text">FAKEFLIX</span>
    </div>
  );
};

export default PlayAnimation;
