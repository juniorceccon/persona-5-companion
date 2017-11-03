import React, {Component} from 'react';
import BookList from '../../components/bookList';
import {Tab, Progress, Checkbox} from 'semantic-ui-react';
import books from './books.json';

class BookProgress extends Component {

    state = {
        done: [],
        have: [],
        groupByLocation: true
    };

    naoTemHandler = (id) => {
        const oldHave = this.state.have;
        const newHave = [...oldHave, id];
        this.setState({have: newHave})
    };

    temHandler = (id) => {
        const newHave = [...this.state.have];
        const removePos = newHave.indexOf(id);
        newHave.splice(removePos, 1);
        const newDone = [...this.state.done, id];

        this.setState({have: newHave, done: newDone});
    };

    finalizadoHandler = (id) => {
        const newDone = [...this.state.done];
        const removePos = newDone.indexOf(id);
        newDone.splice(removePos, 1);

        this.setState({done: newDone});
    };

    toggleGroupByHandler = () => this.setState({groupByLocation: !this.state.groupByLocation});

    render() {
        const qtdTotal = books.length;

        const doneList = books.filter(book => this.state.done.includes(book.id));
        const haveList = books.filter(book => this.state.have.includes(book.id));
        const elseList = books.filter(book => !this.state.done.concat(this.state.have).includes(book.id));

        const pctElse = (elseList.length/qtdTotal).toLocaleString(undefined, {style: 'percent', minimumFractionDigits:2});
        const pctHave = (haveList.length/qtdTotal).toLocaleString(undefined, {style: 'percent', minimumFractionDigits:2});
        const pctDone = (doneList.length/qtdTotal).toLocaleString(undefined, {style: 'percent', minimumFractionDigits:2});

        const panes = [
            {menuItem: `Não tem (${pctElse})`, render: () => <BookList list={elseList} acao={(id) => this.naoTemHandler(id)} groupByLocation={this.state.groupByLocation}/>},
            {menuItem: `Tem (${pctHave})`, render: () => <BookList list={haveList} acao={(id) => this.temHandler(id)} groupByLocation={this.state.groupByLocation}/>},
            {menuItem: `Finalizados (${pctDone})`, render: () => <BookList list={doneList} acao={(id) => this.finalizadoHandler(id)} groupByLocation={this.state.groupByLocation}/>},
        ];

        return (
            <div>
                <Progress percent={doneList.length/qtdTotal*100} indicating />
                <Checkbox toggle label="Group by Location" onChange={this.toggleGroupByHandler} checked={this.state.groupByLocation}/>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
            </div>
        );
    }

}

export default BookProgress;