import React from 'react';
import {Container} from 'reactstrap';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Notes from './containers/Notes/Notes';
// import NewNote from './components/NewNote/NewNote';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/" exact component={Notes}/>
          {/* <Route path="/notes" exact component={Notes}/> */}
          {/* <Route path="/notes/:id/edit" exact component={NewNote}/> */}
          {/* <Route path="/add-note" exact component={NewNote}/> */}
        </Switch>
      </Container>
    </BrowserRouter>
  )
}
  
export default App;
