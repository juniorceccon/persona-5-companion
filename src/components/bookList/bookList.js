import React from 'react';
import {Card, Container, Checkbox, Divider, Header, Segment} from 'semantic-ui-react';
import Book from './book';

function BookList({list, acao}) {
    return (
        <Container fluid>
            <Checkbox toggle label="Group by location"/>
            { list.length !== 0 &&
                <Segment>
                    <Card.Group>
                        {list.map(book => (<Book book={book} key={book.id} acao={() => acao(book.id)}/>))}
                    </Card.Group>
                </Segment>
            }
        </Container>
    );
}

export default BookList;