import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

const Icon = ({ difficulty }) => {
  const cssStyle = {
    color:
      difficulty === "easy"
        ? "green"
        : difficulty === "medium"
        ? "orange"
        : difficulty === "hard"
        ? "red"
        : "#fff",
    fontSize: "1rem", // Font size remains the same
    margin: "0.5rem 0",
  };
  return (
    <div
      style={{
        color: "#f59e0b",
        width: "max-content",
        margin: "1.75rem auto 0",
      }}
    >
      <div style={{ display: "flex" }}>
        {Array.from(
          {
            length:
              difficulty === "easy"
                ? 1
                : difficulty === "medium"
                ? 2
                : difficulty === "hard"
                ? 3
                : 0,
          },
          (_, index) => (
            <StarIcon
              key={index}
              style={{ margin: "0 0.25rem", width: "50px" }}
            />
          )
        )}
      </div>
      <p style={cssStyle}>{difficulty.toLocaleUpperCase()}</p>
    </div>
  );
};

export default Icon;
