function calculate() {
  let score = 337;
  for (let i = 1; i < 105; i++) {
    let checked = document.getElementById(`q${i}`).checked;
    if (i < 94 && checked) {
      if (i < 15) score--;
      else if (i < 41) score -= 2;
      else if (i < 55) score -= 3;
      else if (i < 70) score -= 4;
      else if (i < 75) score -= 5;
      else if (i < 87) score -= 6;
      else score -= 7;
    } else if (i > 93 && !checked) {
      if (i < 96) score--;
      else if (i < 102) score -= 2;
      else score -= 3;
    }
  }
  let percent = Math.round((score/337)*100);
  let color = "purple";
  if (percent < 100) color = "blue";
  if (percent < 90) color = "green";
  if (percent < 80) color = "yellow";
  if (percent < 65) color = "orange";
  if (percent < 25) color = "red";
  if (percent == 0) color = "black";
  document.getElementById("checks").style = "display: none;";
  document.getElementById("percent").innerHTML = `${percent}%`;
  document.getElementById("percent").style.color = color;
  document.getElementById("score").innerHTML = `${score}/337`;
  document.getElementById("result").style = "";
  console.log(score);
}