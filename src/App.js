import { useState } from "react";
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
    </main>
  );
}

export default App;
