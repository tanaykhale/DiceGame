import "./layout.css";
import Dice from "../assets/dices 1.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const DiceLayout = () => {
  const navigate = useNavigate();

  // Memoize the navigation function for efficiency
  const handlePlayNowClick = useCallback(() => {
    navigate("/Gamelayout");
  }, [navigate]);

  return (
    <section className="container">
      <article className="img-container">
        <img src={Dice} alt="Dice Game" />
      </article>
      <article className="msg">
        <h1>Dice Game</h1>
        <button onClick={handlePlayNowClick}>Play now</button>
      </article>
    </section>
  );
};

export default DiceLayout;
