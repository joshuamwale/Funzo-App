import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import StudentHome from './components/student/StudentHome'
import StudentDiscussion from './components/student/StudentDiscussion'
import StudentSchedule from './components/student/StudentSchedule'
import StudentSessionDetails from './components/student/StudentSessionDetails'
import StudentSettings from './components/student/StudentSettings'

import TMModule from './components/tm/TMModule'
import TMSchedule from './components/tm/TMSchedule'
import TMHome from './components/tm/TMHome'

function App() {
  return (
    <div className="App">
      
      
      <Router>
          <div className='col-md-10'>
                <Routes>
                <Route exact path="/student" element={<StudentHome />}></Route>
                    <Route exact path="/student-settings" element={<StudentSettings />}></Route>
                    <Route exact path="/student-schedule" element={<StudentSchedule />}></Route>
                    <Route exact path="/student-discussion" element={<StudentDiscussion />}></Route>

                    <Route exact path="/tm" element={<TMHome />}></Route>
                    <Route exact path="/tm-schedule" element={<TMSchedule />}></Route>
                    <Route exact path="/tm-module" element={<TMModule />}></Route>
                </Routes>
          </div>
        </Router>
    </div>
  );
}

export default App;
