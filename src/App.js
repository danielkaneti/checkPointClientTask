import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './Component/AppBar';
import HonorList from './honor/Component/HonorListComponet';
import StudentList from './Student/Components/StudentList';

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <Routes>
        <Route element={<StudentList/>}  path="/">
          </Route>
          <Route element={<StudentList/>}  path="/students">
          </Route>
          <Route  element={<HonorList/>} path="/honor">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;