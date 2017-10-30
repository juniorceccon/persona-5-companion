import React from 'react';
import { Card, Container, Header } from 'semantic-ui-react';
import Book from './book';

function BookList({ title, list }) {
  return (
    <Container style={{margin: '10px 0'}}>
      <Header as="h3">{title}</Header>
      <Card.Group>
        {list.map(book => (<Book book={book} key={book.id}/>))}
      </Card.Group>
    </Container>
  );
}

export default BookList;