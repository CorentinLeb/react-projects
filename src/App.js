import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projets from './pages/Projets';
import Contact from './pages/Contact';
import { Transition } from 'react-transition-group';
import {gsap} from 'gsap';

const routes = [ 
  { path: "/", name:"Home", Component:Home},
  { path: "/", name:"Projets", Component:Projets},
  { path: "/", name:"Contact", Component:Contact}
]


function App() {
  
  return (
    <Router>
      <main>
        <Navbar/>
            <section className="container">
            <Transition>
          <Switch>
              {routes.map(({path, Component})=>(
                <Route key={path} exact path={path}>
                  {({match})=> (
                      <>
                      <Component />
                      </>
                  )}
                </Route>
              ))}
        </Switch> 
              </Transition>
              {/* <Route path="/" exact component={Home}></Route> */}
              <Route path="/projets" component={Projets}/>
              <Route path="/contact" component={Contact}/> 
            </section>
      </main>
    </Router>
  );
}

export default App;
