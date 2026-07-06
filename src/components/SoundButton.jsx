import "./SoundButton.css";

function SoundButton({ name, sound, onPlay }) {
  return (
    <button className="sound-button" onClick={() => onPlay(sound)}>
      {name}
    </button>
  );
}

export default SoundButton;
