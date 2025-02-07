import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import black_guy  from './assets/red_blue_pill.jpg'

export default function Page1() {
    const navigate = useNavigate();
    const [yesButtonStyle, setYesButtonStyle] = useState<React.CSSProperties>({
        position: 'absolute',
        backgroundColor: 'green',
        bottom: `20%`,
        left: `60%`,
        width: '100px',
        height: '40px'
    });
    const [noCounter, setNoCounter] = useState(0);

    const handleNoClick = () => {
        setYesButtonStyle(prev => ({
            position: 'absolute',
            backgroundColor: 'green',
            bottom: `20%`,
            left: `60%`,
            width: `${prev.width ? parseInt(prev.width.toString()) + 10 : 110}px`,
            height: `${prev.height ? parseInt(prev.height.toString()) + 10 : 50}px`
        }));
        setNoCounter(prev => prev + 1);
    };

    const handleYesClick = () => {
        
        if (noCounter < 20) {
            navigate('/page3');
        }
        else{
            navigate('/gotcha_ass')
        }
    };

    const noButtonStyle: React.CSSProperties = { width: '100px', height: '40px', position: 'absolute' ,backgroundColor: 'red', bottom: `20%`, left: `20%`,};

    return (
        <div>
            <h1>Hi bestie</h1>
            <p>Do you want to be my valentine?</p>  
            <img src={black_guy} alt="black guy" style={{width: '90%', height: '80%', position:'absolute'}} />
            {noCounter < 20 ?
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        style={yesButtonStyle}
                        onClick={handleYesClick}
                    >
                        Yes
                    </button>
                    <button
                        style={noButtonStyle}
                        onClick={handleNoClick}
                    >
                        No
                    </button>
                </div> :
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        style={yesButtonStyle}
                        onClick={handleNoClick}
                    >
                        No
                    </button>
                    <button

                        style={noButtonStyle}
                        onClick={handleYesClick}
                    >
                        Yes
                    </button>
                </div>}
        </div>
    );
}