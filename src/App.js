import List from './components/List';
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Navbar from './components/Navbar';

function App() {
  const [student, setStudent] = useState(data);
  return (
    <main>
      <section className="container">
      <Navbar />
        <h2>Attendance List for {student.length} students</h2>
        <List student={student}/>
        <button onClick = {()=>setStudent([])}>Clear list</button>
      </section>
    </main>
  );
}

export default App;
