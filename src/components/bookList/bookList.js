import React from 'react';
import {Card} from 'semantic-ui-react';
import Book from './book';

function BookList({list, acao}) {
    return (
        <Card.Group>
            {list.map(book => (<Book book={book} key={book.id} acao={() => acao(book.id)}/>))}
        </Card.Group>
    );
}

export default BookList;