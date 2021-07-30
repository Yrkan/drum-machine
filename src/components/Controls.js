import React from "react";

const Controls = ({ settings, setSettings }) => {
  const setVolume = (e) => {
    const val = e.target.value / 100;
    setSettings((prev) => ({ ...prev, volume: val }));
  };

  const togglePower = () => {
    setSettings((prev) => ({ ...prev, power: !prev.power }));
  };

  const toggleBank = () => {
    const newSet = settings.set === "set1" ? "set2" : "set1";
    setSettings((prev) => ({ ...prev, set: newSet }));
  };

  return (
    <div id="controls">
      <div className="controls_el">
        <p>Power</p>
        <label className="switch">
          <input
            type="checkbox"
            checked={settings.power}
            onChange={togglePower}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="controls_el">
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={settings.volume * 100}
          onChange={setVolume}
        />
      </div>
      <div className="controls_el">
        <p>Bank</p>
        <label className="switch">
          <input type="checkbox" onChange={toggleBank} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Controls;
