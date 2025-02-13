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
    alert('YAY Yipeeee!!! You wonnnnn! Be sure to remember the word for later');
    setTimeout(() => navigate('/yea_almost_there'), 50);
  }
  },[won]
  )
  
  return (
    <>
      <div>
        <h2>Wordle Time (6 letters)</h2>
        <h3>eh btw u need to click on the top left square to start</h3>
        
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