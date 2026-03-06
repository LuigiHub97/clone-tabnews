import { useRef, useEffect, useState } from "react";

export default function Home() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  const pauseMusic = () => {
    audioRef.current.pause();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Para o amor da minha vida 💖</h1>

      <div style={styles.photosContainer}>
        <img
          src="/foto 1.jpeg"
          alt="nossa foto 1"
          style={styles.photo}
        />
        <img
          src="/foto 2.jpeg"
          alt="nossa foto 2"
          style={styles.photo}
        />
      </div>

      <div style={styles.buttons}>
        <button
  onClick={() => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }}
  style={styles.button}
>
  {playing ? "⏸ Pausar" : "▶ Tocar"}
</button>
<input
  type="range"
  min="0"
  max="1"
  step="0.01"
  value={volume}
  onChange={(e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  }}
  style={{ marginTop: "15px", width: "200px" }}
/>

      </div>

      <audio ref={audioRef} src="/bk planos.mp3" />

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ffb6c1",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#fff",
    marginBottom: "30px",
  },
  photosContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },
  photo: {
    width: "200px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },
};

