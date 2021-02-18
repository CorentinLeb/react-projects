import List from './components/List';
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

function App() {
  const [student, setStudent] = useState(data);
  return (
    <Router>
      <main>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home}>
            <section className="container">
              <h2>Attendance List for {student.length} students</h2>
              <List student={student}/>
              <button onClick = {()=>setStudent([])}>Clear list</button>
            </section>
          </Route>
          <Route path="/projets" component={Projets}/>
          <Route path="/contact" component={Contact}/>
        </Switch> 
      </main>
    </Router>
  );
}

export default App;
