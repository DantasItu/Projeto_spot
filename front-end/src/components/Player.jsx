import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

// formatação do time
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInseconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({ duration, backBottom, nextBottom, audio }) => {
  // função do player
  const audioPlayer = useRef();
  const progresseBar = useRef();
  const [isPlaying, setIsplaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsplaying(!isPlaying);
  };
  // useEffect para limpar funções de render e de repetição contiuna

  useEffect(() => {
    const intervalid = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
      progresseBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalid);
  }, [isPlaying]);

  // Progresse bar
  const durationInSeconds = timeInseconds(duration);
  // progresseBar.current.style.setProperty("--_progress", (audioPlayer.currentTime / durationInSeconds) *100 + "%");

  return (
    <div className="player">
      <div className="player__control">
        <Link to={`/song/${backBottom}`}>
          <FontAwesomeIcon icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--player"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link to={`/song/${nextBottom}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p className="player__time">{currentTime}</p>
        <div className="player__bar">
          <div ref={progresseBar} className="player__bar-progress"></div>
        </div>
        <p className="player__time">{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
