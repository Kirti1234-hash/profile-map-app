import React, { useEffect } from "react";
import "./BackgroundAnimation.css";

const BackgroundAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById("animationCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let lines = [];
    for (let i = 0; i < 100; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 50 + 20,
        speed: Math.random() * 2 + 1,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = 2;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y + line.length / 2);
        ctx.stroke();

        line.x += line.speed;
        if (line.x > canvas.width) {
          line.x = -line.length;
        }
      });

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return <canvas id="animationCanvas"></canvas>;
};

export default BackgroundAnimation;
