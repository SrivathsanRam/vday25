import { useEffect, useState } from "react";
import WordleBoard from "./components/WordleBoard";
import { useNavigate } from "react-router-dom";


const Page3 = () => {

  const navigate = useNavigate();
  const [won, setWon] = useState(false);
  const handleWon = () =>{
    setWon(true);
  }
  useEffect(()=>{
    if (won){
    alert('You have 3 seconds to remember the word');
    setTimeout(() => navigate('/yea_almost_there'), 3000);
  }
  },[won]
  )
  
  return (
    <>
      <div>
        <h2>Wordle Time</h2>
        
      </div>
      <WordleBoard handleWon={handleWon}/>
      {won &&  
      <div>
        <h2>YAY YOU GOT ITTT</h2>
        <h3>Remember this word for later...</h3>
      </div>
      }
    </>
  )
}

export default Page3