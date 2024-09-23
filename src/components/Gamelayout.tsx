import { useState } from "react";
import "./gamelayout.css";
import Image1 from "../assets/dice_1.png";
import Image2 from "../assets/dice_2.png";
import Image3 from "../assets/dice_3.png";
import Image4 from "../assets/dice_4.png";
import Image5 from "../assets/dice_5.png";
import Image6 from "../assets/dice_6.png";

export default function Gamelayout() {
  const [score, setScore] = useState(0);
  const [yourNumber, setYourNumber] = useState(0);
  const [compNumber, setCompNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [image, setImage] = useState(Image1);
  const [ruleVisiblity, setRulesVisibility] = useState(false);
  const [warning, setWarning] = useState(false);

  const numbers = [1, 2, 3, 4, 5, 6];
  const img = [Image1, Image2, Image3, Image4, Image5, Image6];

  const generateNumber = () => {
    return Math.floor(Math.random() * 6) + 1; // Generate number from 1 to 6
  };

  const handleClick = () => {
    const compNum = generateNumber();
    console.log(compNum);
    setCompNumber(compNum); // Update the computer's generated number
    if (yourNumber === 0) {
      setWarning(true); // Show warning if no number is selected
      return;
    }
    setWarning(false);
    if (compNum === yourNumber) {
      setScore((prevScore) => prevScore + 1); // Increment score if numbers match
    }
    setImage(img[compNum - 1]);
  };

  const resetScore = () => {
    setScore(0); // Reset score to 0
    setCompNumber(0); // Clear the computer's number
  };
  const toggleVisibility = () => {
    setRulesVisibility((prevState) => !prevState);
  };

  return (
    <>
      <div className="score-board">
        <div className="score">
          <h1>{score}</h1>
          <p>Your Score</p>
        </div>
        <div className="select-number">
          <p
            id="warning"
            style={{ visibility: warning ? "visible" : "hidden" }}
          >
            You have not selected any number
          </p>
          <div className="number">
            {numbers.map((number) => (
              <p
                className={`num ${yourNumber === number ? "selected" : ""}`} // Highlight selected number
                key={number}
                onClick={() => {
                  setYourNumber(number);
                  setIsActive(!isActive);
                  setWarning(false);
                }}
              >
                {number}
              </p>
            ))}
          </div>
          <p>Select Your Number</p>
        </div>
      </div>

      <div className="game">
        <div className="image">
          <img
            src={image}
            alt="Dice"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          />
        </div>
        <p className="inst">Click on the dice to roll</p>
        <div className="button-option">
          <button type="button" id="reset" onClick={resetScore}>
            Reset Score
          </button>
          <br />
          <button
            id="rulebtn"
            type="button"
            onClick={() => {
              toggleVisibility();
            }}
          >
            {ruleVisiblity ? "Hide Rules" : "Show Rules"}
          </button>
        </div>

        <div
          className="rules"
          style={{ visibility: ruleVisiblity ? "visible" : "hidden" }}
        >
          <h2>How to play</h2>
          <p>1. Select a number from above. </p>
          <p>2. Click on the dice.</p>
          <p>
            3. After click on dice if selected number is equal to dice number
            you will get a point.
          </p>
          <p>4. If you get wrong guess then 2 point will be reduced.</p>
        </div>
      </div>
    </>
  );
}
