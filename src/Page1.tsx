import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import black_guy  from './assets/red_blue_pill.jpg'
import gotcha_ass from './assets/cat_laughing_at_you.png'

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
    const [isVisible, setIsVisible] = useState(false);

    const handleNoClick = () => {
        setYesButtonStyle(prev => ({
            position: 'absolute',
            backgroundColor: 'green',
            bottom: `20%`,
            left: `60%`,
            width: `${prev.width ? parseInt(prev.width.toString()) + 20 : 110}px`,
            height: `${prev.height ? parseInt(prev.height.toString()) + 20 : 50}px`
        }));
        setNoCounter(prev => prev + 1);
    };

    const handleYesClick = () => {
        if (noCounter>=20){
        setIsVisible(true);
        setTimeout(() => navigate('/moving_on'), 7000);
        }
        else{
            navigate('/moving_on')
        }
    };

    const noButtonStyle: React.CSSProperties = { width: '100px', height: '40px', position: 'absolute' ,backgroundColor: 'red', bottom: `20%`, left: `20%`,};

    return (
        <div>
            <h1>Hi bestie</h1>
            <p>Do you want to be my valentine?</p>  
            <img src={black_guy} alt="black guy" style={{width: '90%', height: '80%', position:'absolute'}} />
            {isVisible && <img src={gotcha_ass} alt="gotcha ass" style={{width: '40%', height: '40%', position:'absolute'}} />}
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