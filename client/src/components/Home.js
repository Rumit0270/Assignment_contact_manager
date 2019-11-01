import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactAdd from './ContactAdd';
import ContactEdit from './ContactEdit';

const Home = (props) => {

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home/contactlist" component={ContactList} exact />
                <Route path="/home/contactadd" component={ContactAdd} exact />
                <Route path="/home/contactedit/:id" component={ContactEdit} exact />
            </Switch>
        </div>
    );
};

export default Home;