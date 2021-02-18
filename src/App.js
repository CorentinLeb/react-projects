import List from './components/List';
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [student, setStudent] = useState(data);
  return (
    <Router>
      <main>
        <Navbar/>
        <Switch>
          <Route path="/">
            <section className="container">
              <h2>Attendance List for {student.length} students</h2>
              <List student={student}/>
              <button onClick = {()=>setStudent([])}>Clear list</button>
            </section>
          </Route>
        </Switch> 
      </main>
    </Router>
  );
}

export default App;
