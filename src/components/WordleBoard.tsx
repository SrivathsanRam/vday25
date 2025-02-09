import { JSX, useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import WordleInput from "./WordleInput";
import './WordleBoard.css';

interface WordleBoardProps {
  handleWon: () => void;
}

const WordleBoard: React.FC<WordleBoardProps> = ({ handleWon }) => {
  const [guesses, setGuesses] = useState<string[]>([...Array(6)]);

  const solution = "always";
  
  useEffect((): void => {
    let hasWon: boolean =
      guesses.filter((guess: string) => guess === solution).length > 0
        ? true
        : false;
    let realGuesses: string[] = guesses.filter(
      (guess: string) => guess && guess
    );
    if (hasWon) {
      handleWon();
    } else if (realGuesses.length >= 6) {
      alert("Stupid ass dont even know how to do worlde");
      window.location.reload();
    }
  }, [guesses, solution]);
  return (
    <>
    <div>
      {guesses.map(
        (_guess: string, i: number): JSX.Element => (
          <WordleInput
            solution={solution}
            setGuesses={setGuesses}
            guesses={guesses}
            index={i}
            key={i} 
            />
        )
      )}
      
    </div>
    <Keyboard />
    </>
  );
};
export default WordleBoard;