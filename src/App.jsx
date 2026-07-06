import { useRef, useState } from "react";
import "./App.css";
import SoundButton from "./components/SoundButton";

// Import sounds
import bc from "./assets/ballerina capuchina.mp3";
import fart from "./assets/Fart Sound.mp3";
import getout from "./assets/get out!.mp3";
import plankton from "./assets/Plankton Aughhhhh.mp3";
import telugu from "./assets/ReelAudio.mp3";
import alarm from "./assets/Samsung OneUI Alarm.mp3";
import kirk from "./assets/We are Charlie Kirk.mp3";
import darshana from "./assets/Darshana.mp3";
import mario from "./assets/Mario.mp3";
import faa from "./assets/Faa.mp3";
import wetfart from "./assets/wetfart.mp3";
import baigan from "./assets/baigan.mp3";
function App() {
  const [volume, setVolume] = useState(0.75);
  const activeAudiosRef = useRef([]);

  const sounds = [
    { id: 1, name: "Italian Brainrot", file: bc },
    { id: 2, name: "Fart", file: fart },
    { id: 3, name: "Get Out!", file: getout },
    { id: 4, name: "Plankton", file: plankton },
    { id: 5, name: "Telugu", file: telugu },
    { id: 6, name: "Alarm", file: alarm },
    { id: 7, name: "Kirk", file: kirk },
    { id: 8, name: "Darshana", file: darshana },
    { id: 9, name: "File Select 64", file: mario },
    { id: 10, name: "Faa", file: faa },
    { id: 11, name: "Wet fart", file: wetfart },
    { id: 12, name: "Baigan", file: baigan },
  ];

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.volume = volume;
    activeAudiosRef.current.push(audio);

    audio.addEventListener("ended", () => {
      activeAudiosRef.current = activeAudiosRef.current.filter(
        (activeAudio) => activeAudio !== audio
      );
    });

    audio.play();
  };

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value);
    setVolume(nextVolume);

    activeAudiosRef.current.forEach((audio) => {
      audio.volume = nextVolume;
    });
  };

  const pauseAudio = () => {
    activeAudiosRef.current.forEach((audio) => {
      audio.pause();
    });
  };

  return (
    <div className="app">
      <h1 className="title">Soundboard</h1>

      <div className="audio-controls">
        <label className="volume-control">
          <span>Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume"
          />
          <span>{Math.round(volume * 100)}%</span>
        </label>

        <button className="pause-button" type="button" onClick={pauseAudio}>
          Pause
        </button>
      </div>

      <div className="soundboard">
        {sounds.map((sound) => (
          <SoundButton
            key={sound.id}
            name={sound.name}
            sound={sound.file}
            onPlay={playSound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
