import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import left_player from "../assets/left_player.png";
import right_player from "../assets/right_target.png";

export default function Maze() {
  const gridHeight = 500;
  const gridWidth = 1250;
  const playerSize = 50;
  const navigate = useNavigate();
  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [obstacles, setObsctacles] = useState([
    { x: 50, y: 0, width: 150, height: 50 },
    { x: 300, y: 50, width: 75, height: 125 },
    { x: 550, y: 150, width: 125, height: 50 },
    { x: 800, y: 200, width: 50, height: 150 },
    { x: 1050, y: 0, width: 100, height: 75 },
    { x: 150, y: 300, width: 175, height: 50 },
    { x: 450, y: 350, width: 100, height: 125 },
    { x: 700, y: 250, width: 200, height: 50 },
    { x: 900, y: 100, width: 75, height: 100 },
    { x: 1100, y: 300, width: 125, height: 100 },
    { x: 50, y: 150, width: 100, height: 75 },
    { x: 250, y: 225, width: 125, height: 50 },
    { x: 450, y: 0, width: 150, height: 75 },
    { x: 650, y: 50, width: 75, height: 125 },
    { x: 850, y: 350, width: 100, height: 50 },
    { x: 1000, y: 225, width: 75, height: 125 },
    { x: 150, y: 400, width: 100, height: 50 },
    { x: 350, y: 150, width: 125, height: 75 },
    { x: 550, y: 300, width: 100, height: 50 },
    { x: 750, y: 0, width: 75, height: 125 },
    { x: 950, y: 200, width: 150, height: 50 },
    { x: 1150, y: 50, width: 50, height: 100 }
]

);
  
  const speed = 10;

  const checkCollision = (x: number, y: number) => {
    return obstacles.some(
      (obs) =>
        x < obs.x + obs.width &&
        x + playerSize > obs.x &&
        y < obs.y + obs.height &&
        y + playerSize > obs.y
    );
  };

  const checkWon = (x: number, y: number) => {
    return (
      x + playerSize >= gridWidth-20 && y + playerSize >= gridHeight - playerSize-10
    );
  };

  const handleKeyDown = (e: { key: string; }) => {
    let newX = player.x;
    let newY = player.y;

    if (e.key === "ArrowUp") newY -= speed;
    if (e.key === "ArrowDown") newY += speed;
    if (e.key === "ArrowLeft") newX -= speed;
    if (e.key === "ArrowRight") newX += speed;

    if (
      newX >= 0 &&
      newX <= gridWidth - playerSize &&
      newY >= 0 &&
      newY <= gridHeight - playerSize &&
      !checkCollision(newX, newY)
    ) {
      setPlayer({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    if (checkWon(player.x, player.y)) {
      alert("You won!");
      navigate("/your_final_challenge");
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [player]);

  return (
    <div
      style={{
        position: "relative",
        width: gridWidth,
        height: gridHeight,
        border: "2px solid black",
      }}
    >
      {/* Player */}
      <div
        style={{
          position: "absolute",
          width: playerSize,
          height: playerSize,
          backgroundColor: "blue",
          left: player.x,
          top: player.y,
        }}
      >
        <img src={left_player} alt="player" style={{ width: "100%" }} />
      </div>
      {/* Obstacles */}
      {obstacles.map((obs, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: obs.width,
            height: obs.height,
            backgroundColor: "red",
            left: obs.x,
            top: obs.y,
          }}
        />
      ))}
      {/* Goal */}
      <div
        style={{
          position: "absolute",
          width: playerSize*1.4,
          height: playerSize*1.4,
          backgroundColor: "green",
          right: 0,
          bottom: 0,
          zIndex: -100,
        }}
      >
        <img src={right_player} alt="player" style={{ width: "100%", zIndex:-40}} />
      </div>
    </div>
  );
}