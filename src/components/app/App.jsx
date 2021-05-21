import React from 'react';
import HeyArnold from '../../containers/HeyArnoldFn';
import {BrowserRouter as Router,
Switch,
Route,
} from 'react-router-dom';
import DetailArnold from '../../containers/DetailFn';


export default function App() {
  return ( 
  <Router>
    <Switch>
      <Route exact path='/' render={(routerProps) => <HeyArnold {...routerProps}/>} />
      <Route
            path="/:id"
            exact
            render={(routerProps) => <DetailArnold {...routerProps} />}
          />
      
    </Switch>
  </Router>
  
  
  );
}
