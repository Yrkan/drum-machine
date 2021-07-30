import data from "../data.json";

import React, { useCallback, useEffect } from "react";

const Pad = ({ settings, setSettings }) => {
  const handleKeyDown = useCallback(
    (event) => {
      const element = data[settings.set].find(
        (e) => e.keyCode === event.keyCode
      );
      if (settings.power && element) {
        playSound(element.id, element.url);
        setSettings((prev) => ({ ...prev, lastPlayed: element.id }));
      }
    },
    [settings]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const playSound = (id, url) => {
    const audio = new Audio(url);
    audio.volume = settings.volume;
    console.log(settings.volume);
    settings.power && audio.play();
    setSettings((prev) => ({ ...prev, lastPlayed: id }));
  };

  return (
    <div id="pad">
      {data[settings.set].map((tile, index) => (
        <button key={index} onClick={() => playSound(tile.id, tile.url)}>
          {tile.keyTrigger}
        </button>
      ))}
    </div>
  );
};

export default Pad;
