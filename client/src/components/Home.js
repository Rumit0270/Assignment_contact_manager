import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList';
import ContactAdd from './ContactAdd';
import ContactEdit from './ContactEdit';
import requireAuth from './requireAuth';

const Home = (props) => {

    return (
        <div>
            <Header { ...props} />
            <Switch>
                <Route path="/home/contactlist" component={requireAuth(ContactList)} exact />
                <Route path="/home/contactadd" component={requireAuth(ContactAdd)} exact />
                <Route path="/home/contactedit/:id" component={requireAuth(ContactEdit)} exact />
            </Switch>
        </div>
    );
};

export default Home;