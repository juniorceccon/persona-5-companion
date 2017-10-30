import React, {Component} from 'react';
import {Menu, Container, Icon} from 'semantic-ui-react'
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import BooksProgress from './containers/bookProgress';
import './App.css';

const menuItens = [
    {title: 'Books', icon: 'book', link: '/books'},
    {title: 'Requests', icon: 'home'},
    {title: 'Menu 3', icon: 'home'}
];

class App extends Component {
    render() {
        return (
            <div>
                <Menu fixed="top" inverted>
                    <Container>
                        <Menu.Item header>Person 5 companion</Menu.Item>
                        {menuItens.map((i, index) => (
                            <Menu.Item as={Link} header key={index} to={i.link ? i.link : '/'}>
                                <Icon name={i.icon}/>
                                {i.title}
                            </Menu.Item>
                        ))}
                    </Container>
                </Menu>
                <Container style={{marginTop: '50px'}}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/books' component={BooksProgress}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;
