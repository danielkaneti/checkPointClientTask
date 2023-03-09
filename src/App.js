import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './Component/AppBar';
import Page1 from './Page1';
import Page2 from './Page2';
import StudentList from './Student/Components/StudentList';

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Routes>
          <Route element={<StudentList/>}  path="/page1">
          </Route>
          <Route  element={<Page2/>} path="/page2">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;