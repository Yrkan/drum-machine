import { useState } from "react";
import Controls from "./components/Controls";
import Pad from "./components/Pad";

function App() {
  const [settings, setSettings] = useState({
    power: true,
    set: "set1",
    volume: 0.5,
    lastPlayed: "",
  });

  return (
    <main id="drum-machine">
      <div id="display">{settings.lastPlayed}</div>
      <Pad settings={settings} setSettings={setSettings} />
      <Controls settings={settings} setSettings={setSettings} />
    </main>
  );
}

export default App;
