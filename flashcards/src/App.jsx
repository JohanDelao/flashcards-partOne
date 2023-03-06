import { useState } from "react";
import "./App.css";
import Hawks from "./assets/atlantaHawks.png";
import Nets from "./assets/brooklynNetsLogo.png";
import Nuggets from "./assets/Nuggets.png";
import Grizzlies from "./assets/memphisGrizzliesLogo.png";
import Sixers from "./assets/76ersLogo.png";
import Pacers from "./assets/Pacers.png";
import Raptors from "./assets/Raptors.png";
import Lakers from "./assets/Lakers.png";
import Bulls from "./assets/Bulls.png";
import Bucks from "./assets/Bucks.png"

function App() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flashcards = [
    {
      image: Hawks,
      answer: "Atlanta",
    },
    {
      image: Nets,
      answer: "Brooklyn",
    },
    {
      image: Nuggets,
      answer: "Denver",
    },
    {
      image: Grizzlies,
      answer: "Memphis"
    },
    {
      image: Sixers,
      answer: "Philadelphia"
    },
    {
      image: Pacers,
      answer: "Indiana"
    },
    {
      image: Lakers,
      answer: "Los Angeles"
    },
    {
      image: Raptors,
      answer: "Toronto"
    },
    {
      image: Bulls,
      answer: "Chicago"
    },
    {
      image: Bucks,
      answer: "Milwaukee"
    }
  ];

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  function increaseIndex() {
    setIndex(() => {
      return index + 1;
    });
  }

  function decreaseIndex() {
    setIndex(() => {
      return index - 1;
    });
  }

  function resetIndex(){
    setIndex( () => {
      return 0;
    })
  }

  return (
    <div className="container">
      <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleFlip}>
        <div className="card-front">
          <img src={flashcards[index].image} height={200}></img>
        </div>
        <div className="card-back">
          <h2>{flashcards[index].answer}</h2>
        </div>
      </div>

      <div className="buttonContainer">
        <button
          className={index == 0 ? "back hidden" : "back"}
          onClick={index == 0 ? "" : decreaseIndex}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"
            />
          </svg>
        </button>
        {index == flashcards.length - 1 ? (
          <button id="reset" onClick={resetIndex}>
            <p>Reset</p>
          </button>
        ) : (
          <button onClick={increaseIndex}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
