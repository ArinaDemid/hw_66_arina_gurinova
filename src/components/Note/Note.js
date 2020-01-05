import React from "react";
import {Card, CardText, CardBody} from 'reactstrap';
import './Note.css';

const Note = props => {

  if (Math.random() > 0.7) throw new Error('Well, this happened.');

  return (
    <div>
      <Card className="Note_block">
        <CardBody>
          <CardText>Text note: {props.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Note;
