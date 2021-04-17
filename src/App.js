import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from  'react-router-dom';

const HatsPage=()=>{
 return <div>
    <h1>Hats</h1>
  </div>
}
function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
