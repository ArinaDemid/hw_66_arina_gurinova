import React from 'react';
import {Container} from 'reactstrap';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Notes from './containers/Notes/Notes';

function App() {
  return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/" exact component={Notes}/>
          </Switch>
        </Container>
      </BrowserRouter>
  )
}
  
export default App;
