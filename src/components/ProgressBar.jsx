import React from "react";

const ProgressBar = ({ correctAnswers, attempted, totalQuestions }) => {
  const scorePercentage =
    attempted > 0 ? (correctAnswers / attempted) * 100 : 0;

  const maxPossibleScore =
    ((correctAnswers + (totalQuestions - attempted)) / totalQuestions) * 100;

  return (
    <>
      <div style={styles.container}>
        <div style={{ ...styles.progressBar, width: "100%" }}>
          <div style={{ ...styles.correctBar, width: `${scorePercentage}%` }} />
        </div>

        <div style={styles.labelContainer}>
          <span style={styles.text}>
            Score: ({scorePercentage.toFixed(1)}%)
          </span>
          <span style={styles.textRight}>
            Max Score: ({maxPossibleScore.toFixed(1)}%)
          </span>
        </div>
      </div>
      {/* {scorePercentage++ ? <h1>Correct </h1> : <> Wrong</>} */}
    </>
  );
};

const styles = {
  container: {
    width: "100%",
    margin: "20px 0",
    position: "relative",
  },
  progressBar: {
    height: "30px",
    backgroundColor: "#f0f0f0",
    borderRadius: "50px",
    overflow: "hidden",
    position: "relative",
    border: "2px solid #ddd",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    // width: "100%",
    // backgroundColor: "black",
  },
  correctBar: {
    height: "100%",
    backgroundColor: "#4caf50",
    transition: "width 0.5s ease-in-out",
  },
  labelContainer: {
    position: "absolute",
    width: "100%",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    padding: "0 15px",
    boxSizing: "border-box",
  },
  text: {
    color: "#333",
    fontWeight: "600",
    fontSize: "14px",
  },
  textRight: {
    color: "#555",
    fontWeight: "600",
    fontSize: "14px",
  },
};

export default ProgressBar;
