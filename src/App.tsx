import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

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
      </Routes>
    </HashRouter>
  );
}

export default App;