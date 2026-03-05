import { useRef } from "react";

export default function Home() {
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
          src="/foto1.jpg"
          alt="nossa foto 1"
          style={styles.photo}
        />
        <img
          src="/foto2.jpg"
          alt="nossa foto 2"
          style={styles.photo}
        />
      </div>

      <div style={styles.buttons}>
        <button onClick={playMusic} style={styles.button}>
          ▶️ Tocar Música
        </button>
        <button onClick={pauseMusic} style={styles.button}>
          ⏸️ Pausar Música
        </button>
      </div>

      <audio ref={audioRef} src="/musica.mp3" />

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

