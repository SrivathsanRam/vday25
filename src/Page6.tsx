import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Page6 = () => {
  const [topText, setTopText] = useState('You\'ve made it this far...');
  const [visible, setVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTopText('...but you\'re not done yet!');
    }, 1500);
    setTimeout(() => {
      setTopText('one last challenge');
    }, 3000);
    setTimeout(() => {
      setTopText('a bit of a memory game');
    }, 4500);
    setTimeout(() => {
      setTopText('Ready?');
    }, 5500);
    setTimeout(() => {
      setTopText('Set...');
    }, 6000);
    setTimeout(() => {
      setTopText('All the besttttt!');
    }, 6500);
    setTimeout(() => {
      setVisible(true);
    }, 6500);

  }, []);

  useEffect(() => {}, [isCorrect]);


    const sentence = [
    {
      text: "We will",
      type: "text",
    },
    {
      text: "blank1",
      type: "select",
      correct: "always",
      options: [
        { label: "sometimes"},
        { label: "always"},
        { label: "possibly"},
        { label: "maybe"},
        { label: "perchance"},
      ],
    },
    {
      text: "be",
      type: "text",
    },
    {
      text: "blank2",
      type: "select",
      correct: "together",
      options: [
        { label: "together"},
        { label: "apart"},
        { label: "evil"},
        { label: "sleepy kittens"},
      ],
    },
    {
      text: "until",
      type: "text",
    },
    {
      text: "blank3",
      type: "select",
      correct: "2300",
      options: [
        { label: "tmrw"},
        { label: "day after"},
        { label: "2300"},
        { label: "2299"},
      ],
    },
    {
      text: "minimally. This also includes unlimited ",
      type: "text",
    },
    {
      text: "blank4",
      type: "select",
      correct: "kisses (incl all of the above)",
      options: [
        { label: "dates"},
        { label: "snuggles"},
        { label: "kisses (incl all of the above)"},
        { label: "naps"},
      ],
    },
  ];

  // State for each blank
  const [selectedWords, setSelectedWords] = useState<{ [key: string]: string | null }>({
    blank1: null,
    blank2: null,
    blank3: null,
    blank4: null,
  });

  // State for open dropdowns
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>({
    blank1: false,
    blank2: false,
    blank3: false,
    blank4: false,
  });

  // State for submit button
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  // Handle selecting an answer
  const handleSelect = (blank: string, choice: string) => {
    setSelectedWords((prev) => ({ ...prev, [blank]: choice }));
    setOpenDropdown((prev) => ({ ...prev, [blank]: false }));
    checkCorrect({ ...selectedWords, [blank]: choice });
  };

  // Check if all selected words match the correct answers
  const checkCorrect = (updatedAnswers: { [key: string]: string | null }) => {
    const allCorrect = sentence
      .filter((part) => part.type === "select")
      .every((part) => updatedAnswers[part.text] === part.correct);

    setIsSubmitDisabled(!allCorrect);
  };
  return (
    <div>
      <h1>{topText}</h1>
      {visible &&     
      <div style={{ fontSize: "1.5rem" }}>
      {sentence.map((part, index) =>
        part.type === "text" ? (
          <span key={index}> {part.text} </span>
        ) : (
          <span key={index} style={{ position: "relative", cursor: "pointer", fontWeight: "bold" }}>
            <span
              onClick={() =>
                setOpenDropdown((prev) => ({ ...prev, [part.text]: !prev[part.text] }))
              }
              style={{ borderBottom: "2px dashed black", padding: "5px" }}
            >
              {selectedWords[part.text] || "____"}
            </span>
            {openDropdown[part.text] && (
              <div
                style={{
                  position: "absolute",
                  background: "white",
                  border: "1px solid black",
                  padding: "5px",
                  top: "30px",
                  left: "0",
                  zIndex: 10,
                }}
              >
                {part.options && part.options.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelect(part.text, option.label)}
                    style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}
                  >
                    
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </span>
        )
      )}
      <br />
      
    </div>
    }
    <button onClick={()=>{navigate("/CONGRATZZZ")}} disabled={isSubmitDisabled} style={{ marginTop: "200px", padding: "10px", fontSize: "1rem" }}>
        Submit
    </button>
    </div>
  )
}

export default Page6