import React, {Component, Fragment} from "react";
import axios from '../../axios-api';
import Note from '../../components/Note/Note';
import withLoader from '../../hoc/withLoader';
import './Notes.css';

class Notes extends Component {
  
  state = {
    notes: []
  };

  async componentDidMount() {
    await this.getNotes();
  }

  async getNotes() {
    const response = await axios('/notes.json');
    if (response.data) {
      const notes = response.data;
      this.setState({notes});
    }
  }

  render() {
    const state = this.state.notes;
    let notes = null;
    if (state) {
      notes = (
        Object.keys(state).map(id => (
            <div className='Note' key={id}>
              <Note
                text={state[id].text}
              />
            </div>
        ))
      ) 
    } 
    return (
      <Fragment>
        <div className='notesDescription'>All Subscription</div>
        {notes}
      </Fragment>
    )
  }
};

export default withLoader(Notes, axios);