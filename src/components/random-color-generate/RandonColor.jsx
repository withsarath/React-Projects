import { useEffect } from "react";
import { useState } from "react";
import styles from './RandomColor.module.css';

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    //create hex array;
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        textAlign: "center",
      }}
    >
      <button className={styles.btn} onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button className={styles.btn} onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button className={styles.btn}
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generalte Random Color
      </button>
      <div
      className={styles.content}>
        <h3>{typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
