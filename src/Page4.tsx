import { useState } from 'react';
import captcha from './assets/captcha.png'
import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c3 from './assets/c3.png'
import c4 from './assets/c4.png'
import c5 from './assets/c5.png'
import c6 from './assets/c6.png'
import c7 from './assets/c7.png'
import c8 from './assets/c8.png'
import c9 from './assets/c9.png'

import { useNavigate } from 'react-router-dom';

interface CaptchaImage {
  src: string;
  correct: boolean;
}

const images: CaptchaImage[] = [
  { src: c1, correct: false },
  { src: c2, correct: false },
  { src: c3, correct: true },
  { src: c4, correct: false },
  { src: c5, correct: true },
  { src: c6, correct: false },
  { src: c7, correct: false },
  { src: c8, correct: false },
  { src: c9, correct: true },
];

const Page4 = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    if (!isVerified) {
      setChecked(true);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const handleVerify = () => {
    const correctSelections = images
      .map((img, idx) => img.correct && selectedImages.includes(idx))
      .filter(Boolean).length;

    if (correctSelections === images.filter((img) => img.correct).length) {
      setIsVerified(true);
      setChecked(true);
    } else {
      alert("Incorrect selection, try again!");
      setSelectedImages([]);
    }
  };

  return (
    <>
      <div>
        <h2>Hmmm... Even a computer could have gotten this far.</h2>
        <p>Verify that you are a human</p>
      </div>
      
      <div style={{ 
  display: "flex", 
  flexDirection: "column",
  alignItems: "center", 
  maxWidth: "300px", 
  border: "1px solid #d3d3d3", 
  borderRadius: "5px", 
  padding: "10px", 
  background: "#f9f9f9", 
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", 
  fontFamily: "Arial, sans-serif"
}}>
  <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
  {/* Checkbox and text */}
  <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
    <input 
      type="checkbox" 
      checked={isVerified} 
      onChange={handleCheckboxChange} 
      disabled={isVerified} 
      style={{ width: "20px", height: "20px", marginRight: "10px", cursor: "pointer" }} 
    />
    <label style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}>
      {isVerified ? "✔ You are verified" : "I'm not a robot"}
    </label>
  </div>

  {/* CAPTCHA image and text */}
  {!isVerified && (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      textAlign: "center"
    }}>
      <img 
        src={captcha} 
        alt="captcha" 
        style={{ height: "50px", borderRadius: "3px", marginBottom: "5px" }} 
      />
      <p style={{ fontSize: "12px", color: "#666", margin: "0" }}>sriCAPTCHA</p>
      <p style={{ fontSize: "10px", color: "#666", margin: "0" }}>Privacy · Terms</p>
    </div>
  )}
  </div>

        {checked && !isVerified && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}> 
            <p>Select the cutest couples:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="captcha-option"
                  style={{
                    width: "70px",
                    height: "70px",
                    border: selectedImages.includes(index) ? "2px solid green" : "2px solid transparent",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
            <button onClick={handleVerify} style={{ marginTop: "10px" }}>Verify</button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={()=>{
          alert("Your hint how we are in the pics")
          navigate('/eh_be_a_bit_patient_can_anot')
          }} disabled={!isVerified}>Next</button>
      </div>

    </>
  )
}

export default Page4