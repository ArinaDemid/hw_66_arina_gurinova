import React, {Component} from "react";
import {Card, CardText, CardBody} from 'reactstrap';
import './Note.css';

class Note extends Component {
  render() {
    return (
      <div>
        <Card className="Note_block">
          <CardBody>
            <CardText>Text note: {this.props.text}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
};

export default Note;
