import React from 'react';
import { Card } from 'semantic-ui-react';

const Book = ({ book }) => (
  <Card>
    <Card.Content>
      <Card.Header>{book.title}</Card.Header>
      <Card.Meta>{book.condition ? book.condition : '-'}</Card.Meta>
      <Card.Description>{book.location}</Card.Description>
    </Card.Content>
  </Card>
);

export default Book;