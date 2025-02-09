import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div>
      <h1>Instructions:</h1>
      <p>I know you really want to be my valentine since you pressed "yes" </p>
      <p>- Every page has a different challenge on it</p>
      <p>- You must complete each challenge before being able to move to the next </p>
      <p>- The next button at the bottom of each page will become enabled once you complete the challenge</p>
      <p>- All the best</p>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        I accept the{' '}
        <button
          onClick={openModal}
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Terms and Conditions
        </button>
      </label>

      <dialog
        open={isModalOpen}
        onClose={closeModal}
        style={{
          position: 'absolute',
          width: '80%',
          maxWidth: '600px',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Terms and Conditions</h2>
        <button
          onClick={closeModal}
          style={{
            padding: '4px 8px',
            cursor: 'pointer',
          }}
        >
          X
        </button>
        </div>
        <p>
          By accepting the terms and conditions, I attest that I want to marry the creator of this puzzle.
          I will promise to snuggle with him and give him unlimited kisses.
          
        </p>
        <p>
          I promise to spend every single valentines day following this with him and only him.
        </p>
        
      </dialog>

      
    </div>
    <button disabled={!isChecked} onClick={() => navigate("/mhmm_keep_going")}>Submit</button>
    </>
  )
}

export default Page2