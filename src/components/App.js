import React from "react";


import SimpleForm from './AddConact/SimpleForm';
import List from './ContactsList/List';
import Details from "./ContactDetails/Details";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <SimpleForm />
      <Details />
      <List />
      <div>
        <Route path='/SimpleForm' component={SimpleForm} />        
        <Route path='/Details' component={Details} />
        <Route path='/List' component={List} />
      </div>

    </div>
  </BrowserRouter>
);

export default App;
