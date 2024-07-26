import React, { useState } from "react";

const App = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [result, setResult] = useState(["🫥", "🫥", "🫥", "🫥", "🫥"]);

  const emojis = ["🔥", "👨🏻‍💻", "🚀", "⭐️", "😄"];

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleReplaceClick = (index) => {
    if (selectedEmoji === "") return;
    const newResult = result.with(index, selectedEmoji);
    setResult(newResult);
    setSelectedEmoji("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Select Emoji:</h1>
      <div>
        {emojis.map((emoji) => (
          <span
            key={emoji}
            style={{
              fontSize: "50px",
              margin: "10px",
              cursor: "pointer",
              border: selectedEmoji === emoji ? "2px solid black" : "none",
              borderRadius: "50%",
              padding: "10px",
            }}
            onClick={() => handleEmojiClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      <h1>Replace:</h1>
      <div style={{ fontSize: "50px" }}>
        {result.map((resultEmoji, index) => (
          <span
            key={index}
            style={{ fontSize: "50px", margin: "10px", cursor: "pointer" }}
            onClick={() => handleReplaceClick(index)}
          >
            {resultEmoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
