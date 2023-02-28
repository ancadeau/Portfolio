import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiant en programmation à Epitech Toulouse",
          "Développeur full stack web",
          "Développeur DevOps",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20
      }}
    />
  );
}

export default Type;
