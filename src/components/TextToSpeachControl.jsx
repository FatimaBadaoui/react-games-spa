import React, { useState, useRef } from "react";

const TextToSpeechControls = ({ textToSpeak }) => {
  const [speechStatus, setSpeechStatus] = useState("stopped");
  const speechUtteranceRef = useRef(null);

  const handleSpeak = () => {
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "en-US";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setSpeechStatus("playing");
    utterance.onpause = () => setSpeechStatus("paused");
    utterance.onend = () => setSpeechStatus("stopped");
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
    speechUtteranceRef.current = utterance;
  };

  const handlePause = () => {
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
      setSpeechStatus("paused");
    }
  };

  const handleResume = () => {
    if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setSpeechStatus("playing");
    }
  };

  return (
    <div className="speech-controls">
      {speechStatus === "playing" && (
        <button onClick={handlePause}>Pause</button>
      )}
      {speechStatus === "paused" && (
        <button onClick={handleResume}>Resume</button>
      )}
      {speechStatus === "stopped" && (
        <button onClick={handleSpeak}>Read Aloud</button>
      )}
    </div>
  );
};

export default TextToSpeechControls;
