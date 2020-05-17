import React from 'react';
import Header from './Header/Header';
import { Route, Switch } from 'react-router-dom';
import ContactList from './ContactList/ContactList';
import ContactAdd from './ContactAdd/ContactAdd';
import ContactEdit from './ContactEdit/ContactEdit';
import requireAuth from './requireAuth';

const Home = (props) => {
  return (
    <div>
      <Header {...props} />
      <Switch>
        <Route
          path="/home/contactlist"
          component={requireAuth(ContactList)}
          exact
        />
        <Route
          path="/home/contactadd"
          component={requireAuth(ContactAdd)}
          exact
        />
        <Route
          path="/home/contactedit/:id"
          component={requireAuth(ContactEdit)}
          exact
        />
      </Switch>
    </div>
  );
};

export default Home;
