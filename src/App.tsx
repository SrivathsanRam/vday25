import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';

import { HashRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/moving_on" element={<Page2 />} />
        <Route path="/mhmm_keep_going" element={<Page3/>} />
        <Route path="/yea_almost_there" element={<Page4/>} />
        <Route path="/eh_be_a_bit_patient_can_anot" element={<Page5/>} />
        <Route path="/your_final_challenge" element={<Page6/>} />
        <Route path="/CONGRATZZZ" element={<Page7/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;