import React, { useState } from 'react';
import data from '../data';
import List from '../components/List';

const Home = () => {
    const [student, setStudent] = useState(data);
    return (
        <div>
            <h2>Attendance List for {student.length} students</h2>
            <List student={student}/>
            <button onClick={(()=>setStudent([]))}>Clear List</button>
        </div>
    )
    
}

export default Home