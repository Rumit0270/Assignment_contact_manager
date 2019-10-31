import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';

const Home = (props) => {

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home/contactlist" component={ContactList} exact />
            </Switch>
        </div>
    );
};

export default Home;