import React, { Component } from 'react';
import BookList from '../../components/bookList';
import books from './books.json';

class BookProgress extends Component {

  state = {
    done: [],
    have: []
  }

  render () {
    return (
      <div>
        <BookList list={books} />
      </div>
    );
  }

}

export default BookProgress;