import React from 'react';
import { Card, Container, Header, Segment } from 'semantic-ui-react';
import Book from './book';

function BookList({ list, acao, groupByLocation }) {
    let lista = undefined;

    if (!groupByLocation) {
        lista = (
            <Segment>
                <Card.Group>
                    {list.map(book => (<Book book={book} key={book.id} acao={() => acao(book.id)} />))}
                </Card.Group>
            </Segment>
        );
    }
    else {
        const groups = {};

        for (let book of list) {
            const location = book.location;
            if (!groups[location]) {
                groups[location] = [];
            }

            groups[location].push(book);
        }
        
        lista = Object.keys(groups).map(location => (
            <Segment key={location}>
                <Header as="h3">{location}</Header>
                <Card.Group>
                    {groups[location].map(book => (<Book book={book} key={book.id} acao={() => acao(book.id)} />))}
                </Card.Group>
            </Segment>
        ));
    }

    return (
        <Container fluid>
            {list.length !== 0 && lista}
        </Container>
    );
}

export default BookList;