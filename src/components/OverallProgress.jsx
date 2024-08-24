import React from "react";

const OverallProgress = ({ length, percentage, count }) => {
  return (
    <div>
      <h1>
        Questions: {count}/ {length}
      </h1>
      <div
        style={{
          height: "20px",
          width: `${percentage}%`,
          backgroundColor: "#e0e0df",
          borderRadius: "50px",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#f44336",
            borderRadius: "inherit",
            textAlign: "right",
            transition: "width 0.5s ease-in-out",
          }}
        >
          <span
            style={{
              padding: "5px",
              color: "white",
              fontWeight: "bold",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default OverallProgress;
