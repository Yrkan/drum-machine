import data from "../data.json";

import React, { useEffect } from "react";

const Pad = ({ settings, setSettings }) => {
  const { set, power } = settings;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (event) => {
    const element = data[set].find((e) => e.keyCode === event.keyCode);
    if (power && element) {
      playSound(element.url, settings.volume);
      setSettings((prev) => ({ ...prev, lastPlayed: element.id }));
    }
  };

  const playSound = (id, url, volume = 0.5, power = true) => {
    const audio = new Audio(url);
    audio.volume = volume;
    power && audio.play();
    setSettings((prev) => ({ ...prev, lastPlayed: id }));
  };

  return (
    <div id="pad">
      {data[set].map((tile, index) => (
        <button
          key={index}
          onClick={() => playSound(tile.id, tile.url, settings.volume, power)}
        >
          {tile.keyTrigger}
        </button>
      ))}
    </div>
  );
};

export default Pad;
