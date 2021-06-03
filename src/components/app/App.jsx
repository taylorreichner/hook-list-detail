import React from 'react';
import {BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import DetailPage from '../Details';
import CharacterList from '../characterList';

export default function App() {
  return ( 
  <Router>
    <Switch>
      <Route exact path='/' component={CharacterList}/>
      <Route exact path='/:id' component={DetailPage} />
    </Switch>
  </Router>
  
  
  );
}
