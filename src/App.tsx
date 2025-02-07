
import Page1 from './Page1';
import Page2 from './Page2';

import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/gotcha_ass" element={<Page2 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;