import React, { Component } from 'react';
import BookList from '../../components/bookList';
import books from './books.json';

class BookProgress extends Component {

  state = {
    done: ["pirate_legend"],
    have: []
  };

  render () {
    const doneList = books.filter(book => this.state.done.includes(book.id));
    const haveList = books.filter(book => this.state.have.includes(book.id));
    const elseList = books.filter(book => !this.state.done.concat(this.state.have).includes(book.id));
    return (
      <div>
        {doneList.length > 0 ? <BookList title="Finalizados" list={doneList} /> : null}
        {haveList.length > 0 ? <BookList title="Tem" list={haveList} /> : null}
        {elseList.length > 0 ? <BookList title="Não tem" list={elseList} /> : null}
      </div>
    );
  }

}

export default BookProgress;