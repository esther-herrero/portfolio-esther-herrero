import { useEffect, useRef } from "react";
import simpsonsGif from "../../../public/img/thesimpsons.gif";
import simpsonsAudio from "../../../public/img/homer.mp3";

const ProjectHomerFull = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.warn("El navegador bloqueó la reproducción automática 😅", err);
      });
    }
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#000",
    }}>
      <audio ref={audioRef} src={simpsonsAudio} preload="auto" />
      <img
        src={simpsonsGif}
        alt="The Simpsons"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default ProjectHomerFull;
