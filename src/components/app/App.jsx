import React from 'react';
import HeyArnold from '../../containers/HeyArnoldFn';
import {BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import DetailPage from '../Details';

export default function App() {
  return ( 
  <Router>
    <Switch>
      <Route exact path='/' component={HeyArnold}/>
      <Route exact path='/:id' component={DetailPage} />
    </Switch>
  </Router>
  
  
  );
}
